package main

import (
	"os/exec"
)

func main() {
	cmd := exec.Command("gulp compile-less compile-coffee babel minify-js minify-css")
	cmd.Start()
	cmd.Run()
}
