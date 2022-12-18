# このプロジェクトについて

このプロジェクトはチーム開発練習第一弾として、日本語版ポケモン図鑑を作ろうと思います。

# 始め方

clone して使ってください。

# ブランチの運用ルール

- main
  - 本番用ブランチ。品質は完璧じゃなきゃいけない。
- develop
  - 開発用ブランチ。main から切られたブランチ。コードレビュー済みのものしか merge できない。
- feature/チケット番号等
  - 作業用ブランチ。develop から切る。基本的な作業はここで行う。develop に merge されたら新しく develop から feature ブランチを切って新しく作業を始める。

## develop に merge されたら

```
// developブランチに移動
git checkout develop

// リモートの差分取り込み
git pull origin develop

// 新しくfeatureブランチを切る
git checkout -b feature/チケット
```

として新しく始めてください。

# git commit について

[commit 早見表](https://chisel-tiglon-a6b.notion.site/Git-commit-3661a7407ac94c46814f0bbc5589839a)
を作成してます。prefix をコピペで使えます。よかったらどうぞ。

# CSS について

emotion というものを使ってスタイルを当ててください。
デザインは皆さんのフィーリングに任せますので、頑張ってください。笑
進捗見て、最後の方にデザイン修正タスクを足すかもしれないんで、気にしすぎないで

# 使用する技術スタック

- React v18
- Emotion
- TypeScript
- Node v18
- Volta
- Vite

# 開発サーバー

```
npm i
```

して

```
npm run dev
```

したらスタートです。
