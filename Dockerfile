FROM golang:1.16

COPY . .
RUN go build
RUN go main.go run