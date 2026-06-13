{
  pkgs ? import <nixpkgs> { },
}:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs_22
    pkgs.python3
    pkgs.gcc
    pkgs.gnumake
    pkgs.pkg-config
    pkgs.sqlite
  ];

  # This environment variable tells node-gyp to use the
  # headers provided by the Nix-installed Node.js instead of
  # trying to download them from the internet.
  shellHook = ''
    export npm_config_nodedir=${pkgs.nodejs_22}
    echo "Nix-provided Node headers linked."
  '';
}
