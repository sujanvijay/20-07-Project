resource "aws_ecr_repository" "game_repo" {
  name                 = "2048-game-repo"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}
