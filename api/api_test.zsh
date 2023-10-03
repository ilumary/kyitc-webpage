curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"name":"Hans Peter","email":"hanspeter@test.de", "message":"Hallo das ist ein Test"}' \
  http://localhost:5000/api/contact
