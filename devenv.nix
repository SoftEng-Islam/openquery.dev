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
    hello         # Run scripts directly
    git --version # Use packages
    echo "hello Dev"
  '';

  # https://devenv.sh/tasks/
  # tasks = {
  #   "myproj:setup".exec = "mytool build";
  #   "devenv:enterShell".after = [ "myproj:setup" ];
  # };

  # https://devenv.sh/tests/
  enterTest = ''
    echo "Running tests"
    git --version | grep --color=auto "${pkgs.git.version}"
  '';

  # https://devenv.sh/git-hooks/
  # git-hooks.hooks.shellcheck.enable = true;

  # See full reference at https://devenv.sh/reference/options/
}
