package main

import (
	"log"
	"net/http"
)

func main() {
	// Gestione dei file statici
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	// Gestione del template HTML
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "templates/index.html")
	})

	// Avvio del server
	log.Println("Server in ascolto sulla porta 8080...")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
