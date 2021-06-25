package main

import "os/exec"

func main() {
	exec.Command("gulp compile-less compile-coffee minify-css babel minify-js").Run()
}