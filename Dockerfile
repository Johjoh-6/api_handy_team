# Use the official Go image as the base image for the build stage
FROM golang:latest AS builder

# Set the working directory in the container
WORKDIR /app

COPY . .

# Remove any previously initialized go.mod and go.sum files
RUN rm -f go.mod go.sum

# Initialize Go modules
RUN go mod init handyteamapi

# Fetch dependencies
RUN go mod tidy

# Build the Go binary
RUN CGO_ENABLED=0 go build -o /handyteamapi

# Use a minimal base image for the production stage
FROM alpine:latest

# Copy the binary from the build stage to the production stage
COPY --from=builder /handyteamapi /handyteamapi

# Expose the port that the application listens on
EXPOSE 8080

# Run the application
CMD ["/handyteamapi", "serve", "--http=0.0.0.0:8080"]
