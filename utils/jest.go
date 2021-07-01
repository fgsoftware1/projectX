package main

import (
	"os/exec"
)

func main() {
	cmd := exec.Command("cmd.exe","/C","npm run test")
	cmd.Run()
}
