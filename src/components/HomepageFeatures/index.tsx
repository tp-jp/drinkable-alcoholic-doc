import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "リアルな物理演算",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        手に持ってグラスを傾けると中身が揺れ、さらに傾けると実際に中身が減ります。
        VRChatでリアルなお酒体験を楽しめます。
      </>
    ),
  },
  {
    title: "かんたん導入",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>UnityパッケージをインポートしてPrefabを配置するだけ。</>,
  },
  {
    title: "PC/Quest対応",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        VRChatのPC版・Quest版の両方に対応。
        <br />
        幅広いユーザーがワールドで「飲めるお酒」を楽しめます。
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
