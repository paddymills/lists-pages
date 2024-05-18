with (import <nixpkgs> {});
mkShell {
  buildInputs = [
    nodePackages.pnpm
    nodejs_22
    fzf
    ripgrep
    lsof
  ];
}
