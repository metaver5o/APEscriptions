#!/bin/bash
# decode your hexdata from chain transaction
# Hex data
hex_data="replace with your full hex string"

# Convert hex to binary and write to a file
echo $hex_data | xxd -r -p > output_image.png

echo "Image successfully saved as output_image.png"