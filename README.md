# CursorとGitHub PagesでWebサイトをデプロイする完全ガイド

このプロジェクトは、Cursorエディタを使用してHTMLを開発し、GitHub PagesでWebサイトを公開するまでの完全な手順を説明するチュートリアルサイトです。

## 📋 プロジェクト概要

このWebサイトでは、以下の内容を詳しく解説しています：

- Cursorエディタのインストールとセットアップ
- Gitのインストールと初期設定
- GitHubアカウントの作成
- CursorとGitHubの認証設定
- HTMLファイルの作成と開発
- GitHub Pagesへのデプロイ方法

## 🚀 使用方法

### ローカルでの表示

1. このリポジトリをクローンまたはダウンロードします
2. `index.html` をブラウザで開きます
3. または、ローカルサーバーを起動します：
   ```bash
   # Python 3の場合
   python -m http.server 8000
   
   # Node.jsの場合（http-serverが必要）
   npx http-server
   ```
4. ブラウザで `http://localhost:8000` にアクセスします

### Cursorでの開発

1. Cursorエディタでこのフォルダを開きます
2. `index.html`、`styles.css`、`script.js` を編集します
3. ライブプレビュー機能を使用して変更を確認します

## 📁 ファイル構成

```
.
├── index.html      # メインのHTMLファイル
├── styles.css      # スタイルシート
├── script.js       # JavaScript機能
└── README.md       # このファイル
```

## 🎨 機能

- **レスポンシブデザイン**: モバイル、タブレット、デスクトップに対応
- **ダークモード対応**: システムの設定に応じて自動的に切り替わります
- **スムーズスクロール**: ナビゲーションリンクをクリックするとスムーズにスクロール
- **アクティブセクション検出**: スクロール位置に応じてナビゲーションが自動的にハイライト
- **モダンなUI**: クリーンで読みやすいデザイン

## 🌐 GitHub Pagesへのデプロイ

### ステップ1: リポジトリの作成

1. GitHubにログインします
2. 新しいリポジトリを作成します（例: `cursor-github-pages-tutorial`）
3. リポジトリを「Public」に設定します

### ステップ2: ファイルのアップロード

#### 方法A: Cursorのターミナルを使用

```bash
# リポジトリの初期化
git init

# ファイルを追加
git add .

# コミット
git commit -m "Initial commit"

# リモートリポジトリを追加
git remote add origin https://github.com/your-username/your-repo.git

# ブランチをmainに設定
git branch -M main

# プッシュ
git push -u origin main
```

#### 方法B: GitHubのWebインターフェースを使用

1. GitHubリポジトリページで「uploading an existing file」をクリック
2. ファイルをドラッグ&ドロップまたは選択
3. 「Commit changes」をクリック

### ステップ3: GitHub Pagesの有効化

1. リポジトリの「Settings」タブを開きます
2. 左サイドバーの「Pages」を選択します
3. 「Source」セクションで「Deploy from a branch」を選択します
4. 「Branch」で「main」を選択し、フォルダは「/ (root)」を選択します
5. 「Save」ボタンをクリックします

### ステップ4: デプロイの確認

数分待ってから、以下のURLにアクセスします：
```
https://your-username.github.io/your-repo-name
```

## 🔄 更新のデプロイ

ファイルを更新したら、以下のコマンドで再デプロイします：

```bash
git add .
git commit -m "Update website"
git push
```

数分後、変更がGitHub Pagesに反映されます。

## 📝 カスタマイズ

### 色の変更

`styles.css` の `:root` セクションでカラーパレットを変更できます：

```css
:root {
    --primary-color: #2563eb;
    --primary-hover: #1d4ed8;
    /* 他の色も同様に変更可能 */
}
```

### コンテンツの編集

`index.html` を編集して、コンテンツをカスタマイズできます。各セクションは `<section>` タグで区切られています。

### 機能の追加

`script.js` に新しい機能を追加できます。コードコピーボタン機能はコメントアウトされていますが、必要に応じて有効化できます。

## 🛠️ 技術スタック

- **HTML5**: セマンティックなマークアップ
- **CSS3**: モダンなスタイリング、Flexbox、カスタムプロパティ
- **Vanilla JavaScript**: 依存関係なしの軽量なJavaScript

## 📚 参考リンク

- [Cursor公式サイト](https://cursor.sh/)
- [Git公式サイト](https://git-scm.com/)
- [GitHub](https://github.com/)
- [GitHub Pages](https://pages.github.com/)
- [GitHub Pages ドキュメント](https://docs.github.com/ja/pages)

## 📄 ライセンス

このプロジェクトは自由に使用、改変、配布できます。

## 🤝 貢献

バグ報告や機能提案は、IssueまたはPull Requestでお願いします。

## 📧 お問い合わせ

質問やフィードバックがある場合は、GitHubのIssueでお知らせください。

---

**最終更新**: 2024年
