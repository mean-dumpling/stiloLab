# Mini server statico per l'anteprima locale (nessuna dipendenza richiesta)
# Uso:  powershell -ExecutionPolicy Bypass -File .claude/serve.ps1
$root = Split-Path -Parent $PSScriptRoot
$port = 4173

$mime = @{
  ".html" = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "application/javascript; charset=utf-8"
  ".svg"  = "image/svg+xml"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".webp" = "image/webp"
  ".ico"  = "image/x-icon"
  ".txt"  = "text/plain; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".woff2" = "font/woff2"
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Stilo Lab in ascolto su http://localhost:$port/  (root: $root)"

while ($listener.IsListening) {
  try {
    $ctx = $listener.GetContext()
    $reqPath = [System.Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath.TrimStart("/"))
    if ([string]::IsNullOrWhiteSpace($reqPath)) { $reqPath = "index.html" }
    $file = Join-Path $root $reqPath
    $full = [System.IO.Path]::GetFullPath($file)

    if ($full.StartsWith($root, [System.StringComparison]::OrdinalIgnoreCase) -and (Test-Path $full -PathType Leaf)) {
      $ext = [System.IO.Path]::GetExtension($full).ToLower()
      $type = $mime[$ext]; if (-not $type) { $type = "application/octet-stream" }
      $bytes = [System.IO.File]::ReadAllBytes($full)
      $ctx.Response.ContentType = $type
      $ctx.Response.ContentLength64 = $bytes.Length
      $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $ctx.Response.StatusCode = 404
      $msg = [System.Text.Encoding]::UTF8.GetBytes("404 - Not found: /$reqPath")
      $ctx.Response.OutputStream.Write($msg, 0, $msg.Length)
    }
    $ctx.Response.OutputStream.Close()
  } catch {
    if (-not $listener.IsListening) { break }
  }
}
