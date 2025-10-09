import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Vault(): React.ReactElement {
  return (
    <Layout
      title="知識庫"
      description="Ycat 的個人知識庫 - 整理各領域學習心得與實踐經驗">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h1">知識庫</Heading>
            <p>
              這裡是我的個人知識庫，收錄了各個領域的學習筆記、研究心得與實踐經驗。
            </p>
            <p>
              內容涵蓋社會科學、技術研發、個人成長等多元主題，
              採用結構化的方式整理，方便查閱與連結相關知識。
            </p>
            <p>
              知識庫持續更新中，歡迎探索不同主題的內容！
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}