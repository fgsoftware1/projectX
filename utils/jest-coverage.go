package main

import (
	"os/exec"
)

func main() {
	cmd := exec.Command("cmd.exe","/C","yarn jest test --coverage --collectCoverage")
	cmd.Run()
}