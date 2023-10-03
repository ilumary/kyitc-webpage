use actix_cors::Cors;
use actix_web::{
    get, middleware, post, web, App, HttpResponse, HttpServer, Responder, ResponseError,
};
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

#[post("/api/contact")]
async fn contact(req: web::Json<ContactForm>) -> Result<HttpResponse, MyError> {
    debug!("{} messaged: {}", req.name, req.message);
    Ok(HttpResponse::Ok().finish())
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
