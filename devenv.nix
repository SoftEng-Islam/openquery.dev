{
  pkgs,
  lib,
  config,
  inputs,
  ...
}:

{
  # https://devenv.sh/basics/
  env.GREET = "devenv";

  # https://devenv.sh/packages/
  packages = with pkgs; [
    git
    pnpm
    # atuin
    # bat
    sqlite
    pkgs.gnumake
    pkgs.gcc
    pkgs.python3
  ];

  # https://devenv.sh/languages/
  languages.javascript.enable = true;
  languages.javascript.corepack.enable = true;
  languages.javascript.lsp.enable = true;
  languages.javascript.nodejs.enable = true;
  languages.javascript.pnpm.enable = true;

  # https://devenv.sh/basics/
  enterShell = ''
    git --version # Use packages
    echo "hello Dev"
  '';

  # See full reference at https://devenv.sh/reference/options/
}
