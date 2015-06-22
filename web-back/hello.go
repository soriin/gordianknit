package hello

import (
	"fmt"
	"log"
	"net/http"
)

func init() {
	log.Println("Starting...")

	http.HandleFunc("/api/", handler)
	log.Println("Started...")
}

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello, world!")
}
