package main

import "os/exec"

func main() {
	exec.Command("cmd /c gulp compile-less compile-coffee babel minify-js minify-css").Output()
}