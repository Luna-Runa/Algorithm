package main

import (
	"bufio"
	"fmt"
	"os"
)

var stdio = bufio.NewReadWriter(
	bufio.NewReader(os.Stdin),
	bufio.NewWriter(os.Stdout),
)

func main() {
	defer stdio.Flush()

	var a int
    var b string = ""
	fmt.Fscan(stdio, &a)
    for i := 0; i < a; i++ {
        b += "*"
        fmt.Fprintln(stdio, b)
    }
 }
