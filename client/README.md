# コンポーネント構成

```bash
├── App.css
├── App.tsx
├── components
│   ├── model
│   │   └── user(ログインやサインアップなど)
│   ├── pages(Router.tsxに記載のpage)
│   │   ├── home
│   │   ├── message
│   │   ├── profile etc
│   └── ui(使い回しが効くものはコンポーネントを作成、GridItemやButtonなど)
```