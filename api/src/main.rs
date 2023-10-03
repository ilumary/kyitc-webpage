use actix_cors::Cors;
use actix_web::{
    get, middleware, post, web, App, HttpResponse, HttpServer, Responder, ResponseError,
};
use dotenv::dotenv;
use lettre::transport::smtp::authentication::Credentials;
use lettre::{Message, SmtpTransport, Transport};
use log::debug;
use serde::{Deserialize, Serialize};
use std::env;

#[derive(Debug)]
pub struct MyError(String); // <-- needs debug and display

impl std::fmt::Display for MyError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "A validation error occured on the input.")
    }
}

impl ResponseError for MyError {}

#[derive(Debug, Deserialize, Serialize)]
pub struct ContactForm {
    name: String,
    email: String,
    message: String,
}

fn send_email(form: &ContactForm) -> Result<(), MyError> {
    let smtp_key: &str = &std::env::var("SMTP_KEY").expect("SMTP_KEY must be specified");
    let from_email: &str = &std::env::var("SMTP_MAIL").expect("SMTP_MAIL must be specified");
    let host: &str = &std::env::var("SMTP_SERVER").expect("SMTP_SERVER must be specified");
    let to_email = from_email.clone();

    let email: Message = Message::builder()
        .from(from_email.parse().unwrap())
        .to(to_email.parse().unwrap())
        .subject(form.name.to_owned() + " contact request")
        .body(
            "<sent by ".to_owned()
                + &form.email.clone()
                + &">\n".to_owned()
                + &form.message.clone(),
        )
        .unwrap();

    let creds: Credentials = Credentials::new(from_email.to_string(), smtp_key.to_string());

    let mailer: SmtpTransport = SmtpTransport::relay(host)
        .unwrap()
        .credentials(creds)
        .build();

    match mailer.send(&email) {
        Ok(_) => debug!("email sent successfully!"),
        Err(e) => return Err(MyError(format!("failed to send email: {}", e))),
    }

    Ok(())
}

#[post("/api/contact")]
async fn contact(req: web::Json<ContactForm>) -> Result<HttpResponse, MyError> {
    match send_email(&req.into_inner()) {
        Ok(()) => Ok(HttpResponse::Ok().finish()),
        Err(_) => Ok(HttpResponse::ServiceUnavailable().finish()),
    }
}

#[post("/{other_url:.*}")]
async fn invalid(other_url: web::Path<String>) -> impl Responder {
    debug!("TEST");
    "Invalid resource ".to_owned() + &other_url.to_string() + "\n"
}

#[get("/api")]
async fn standard_get() -> impl Responder {
    "Hello from API".to_owned() + "\n"
}

#[get("/")]
async fn index() -> impl Responder {
    "Hello from Index".to_owned() + "\n"
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    env::set_var("RUST_LOG", "actix_web=debug,actix_server=debug");
    dotenv().ok();
    env_logger::init();

    HttpServer::new(|| {
        let _json_config = web::JsonConfig::default().limit(4096);

        App::new()
            .wrap(middleware::Logger::default())
            .wrap(Cors::permissive())
            .service(contact)
            .service(invalid)
            .service(standard_get)
            .service(index)
    })
    .bind(("127.0.0.1", 5000))?
    .run()
    .await
}
