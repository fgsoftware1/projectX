package main

import (
	"os/exec"
)

func main() {
	cmd := exec.Command("cmd.exe","/C","gulp babel")
	cmd.Run()
}