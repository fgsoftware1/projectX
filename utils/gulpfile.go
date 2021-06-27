package main

import (
	"os/exec"
)

func main() {
	cmd := exec.Command("cmd.exe","/C","gulp compile-less compile-coffee babel minify-css minify-js")
	cmd.Run()
}
