module.exports = {
  "compressors": {
    "*.{html,css,js,svg,map}": [
      "...",
      "@parcel/compressor-gzip",
      "@parcel/compressor-brotli"
    ]
  }
}