TONE 開発環境構築手順（for チーム開発）

✅ 前提条件
	•	Docker Desktop がインストールされていること
	•	Node.js や Python のローカルインストールは不要（全て Docker 上で完結）

⸻

🐳 環境構築（初回）

# プロジェクトルートで実行
# キャッシュなしでビルド（依存関係の不整合防止のため）
docker compose build --no-cache

# コンテナ起動
docker compose up


⸻

📦 各種サービス情報

サービス	URL	内容
Web（Vite）	http://localhost:5173	React Webアプリ
Backend API	http://localhost:8000	FastAPI (Python)
DB UI	http://localhost:8081	Adminer（PostgreSQL管理）
オブジェクトストレージ	http://localhost:9001	MinIO（Web管理画面）


⸻

📂 ディレクトリ構成（抜粋）

project-root/
├── backend/           # FastAPI アプリケーション
├── frontend/
│   └── web/           # React アプリ（Vite）
├── docker-compose.yml
└── SETUP.md           # このドキュメント


⸻

⚠️ よくあるエラーと対処
	•	web サービスで Rollup の native モジュールエラーが出る場合：

rm -rf node_modules package-lock.json
npm install
docker compose build --no-cache



⸻

📌 その他
	•	.env ファイルでDB接続情報やMinIOの認証情報を管理することを検討してください（例：.env.example を作成）
	•	Pull Request には環境構築不要でアプリが起動することを確認した上で出すようにしてください。

⸻

👥 担当・連絡
	•	セットアップに関する質問がある場合は @seichan-official まで