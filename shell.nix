with import <nixpkgs> {};
stdenv.mkDerivation {
  name = "personal-website-blog";
  buildInputs = [
    nodejs
    # nodePackages.live-server
    nodePackages.nodemon
    nodePackages.create-react-app
  ];
}
