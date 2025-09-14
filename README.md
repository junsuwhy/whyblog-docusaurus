# WhyBlog Docusaurus

基於 Docusaurus 的部落格和知識庫應用程式，採用雙倉庫架構設計。

## 專案簡介

這是 WhyBlog 雙倉庫架構中的**應用程式倉庫**，負責：

- 🏗️ 接收來自內容倉庫的 repository_dispatch 事件觸發
- 📥 自動檢出內容倉庫的最新內容
- ⚡ 執行 Docusaurus 建置流程
- 🚀 部署靜態網站至 GitHub Pages

## 技術架構

本專案採用雙倉庫 + repository_dispatch 架構：

- **內容倉庫**: [whyblog-content](https://github.com/junsuwhy/whyblog-content) - 專門存放 Markdown 文章和資源
- **應用程式倉庫**: 本倉庫 - Docusaurus 應用程式與 GitHub Actions 部署流程
- **自動觸發**: 內容更新時自動觸發應用程式重新建置與部署

### 架構優點

- ✨ 內容與程式碼分離，便於管理
- 📝 內容作者無需關心技術細節
- 🔄 自動化部署，提升工作效率  
- 🎯 各倉庫職責單一，維護簡單

## 目錄結構

```
docusaurus/
├── README.md                    # 本說明檔
├── package.json                 # Node.js 依賴配置
├── docusaurus.config.js         # Docusaurus 主要配置
├── sidebars.js                  # 側邊欄結構配置
├── content/                     # 內容目錄 (從內容倉庫 `whyblog-content` 同步)
│   ├── blog/                   # 部落格文章
│   ├── docs/                   # 知識庫文檔  
│   └── img/                    # 圖片資源
├── src/                        # 自訂元件與樣式
├── .github/workflows/          # GitHub Actions 工作流程
└── build/                      # 建置輸出目錄
```

## 部署流程

1. 內容倉庫有新的 commit 或 PR 合併
2. 內容倉庫的 GitHub Actions 發送 repository_dispatch 事件
3. 本倉庫的 GitHub Actions 被觸發：
   - 檢出內容倉庫最新內容到 `content/` 目錄
   - 安裝依賴並執行 Docusaurus 建置
   - 將建置結果部署到 GitHub Pages

## 本地開發

### 環境要求

- Node.js 18+ 
- npm 或 yarn

### 安裝與啟動

```bash
# 安裝依賴
npm install

# 本地開發伺服器
npm run start

# 建置靜態網站
npm run build

# 預覽建置結果
npm run serve
```

## 相關連結

- 📝 **內容倉庫**: [whyblog-content](https://github.com/junsuwhy/whyblog-content)
- 🌐 **線上網站**: [GitHub Pages](https://junsuwhy.github.io/whyblog-docusaurus/)
- 📚 **Docusaurus 文檔**: [docusaurus.io](https://docusaurus.io/)

## GitHub Actions 設定

### 必要的 Secrets 和 Variables

**內容倉庫設定：**
- `REPO_DISPATCH_TOKEN`: Personal Access Token (需要 public_repo 權限)
- `APP_REPO_NAME` (Variable): 應用程式倉庫名稱，設定為 `junsuwhy/whyblog-docusaurus`

**應用程式倉庫設定：**
- `CONTENT_REPO_TOKEN`: Personal Access Token (需要讀取內容倉庫權限)
- GitHub Pages 權限：Settings > Actions > General 啟用 "Read and write permissions"

### 故障排除

**常見問題：**
1. repository_dispatch 未觸發 → 檢查 token 權限
2. 內容檢出失敗 → 驗證 CONTENT_REPO_TOKEN
3. 建置失敗 → 檢查內容格式與設定檔

## 開發與貢獻

如需修改網站功能或樣式，請在本倉庫進行開發。
如需新增或修改內容，請到 [內容倉庫](https://github.com/junsuwhy/whyblog-content) 進行操作。

---

📧 如有任何問題或建議，歡迎開啟 Issue 或 Pull Request。
