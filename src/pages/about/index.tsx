import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function About(): React.ReactElement {
  return (
    <Layout
      title="關於我"
      description="了解更多關於 Ycat 的個人成長知識庫">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h1">關於我</Heading>
            <p>
              歡迎來到我的個人知識庫！我是一位熱愛探索社會議題、建構知識體系並將理想付諸實踐的學習者。
            </p>
            <p>
              這個網站記錄了我在各個領域的學習心得、思考筆記，以及實踐經驗。
              希望透過分享，能與更多志同道合的朋友交流，共同成長。
            </p>
            <p>
              如果您對網站內容有任何想法或建議，歡迎透過首頁的聯絡方式與我交流。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}