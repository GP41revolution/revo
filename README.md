# 水と光のレボ☆リューション　浄水戦隊アクアガーディアンズ！開発プロジェクト

### Gitの初期設定
## リポジトリをcloneする
`C:\GP41`上でpowershellを立ち上げ、リモートリポジトリをcloneしてください。
```
git clone "https://github.com/GP41revolution/revo.git"
```
## ブランチを切る

// ここで、mainが表示されるか確認してください。
```
cd .\revo\
git branch
```
// Developブランチを切ってください。
※ローカル環境とリモート環境を統合させます。
```
git switch -c develop
git pull origin develop
```
// ステージングエリアに保存します。
```
git add .
git commit -m "firstcommit"
```
// ここから、自分の作業環境を構築していきます。
※nameは仮で自分の名前にしておいてください。
```
git switch -c feature/name
git push origin feature/name
```