# 概要
手にもってグラスを傾けると揺れ、さらに傾けると中身が減る「飲めるお酒」です。
バーやラウンジなどのくつろぎ系ワールドなどに置いて雰囲気を楽しめるアイテムです。
VRChatのPC/Questの両方に対応しています。

下記のワールドで実際の商品をお試しいただけます。

Starlight lane
https://vrchat.com/home/launch?worldId=wrld_0c3caeaa-7224-4800-aa64-bc473ccb18a2

本商品の液体には Joseph Kalathil さんのシェーダーとスクリプトを使用しています。
https://gist.github.com/josephbk117/0ae30f1e4593a82fb6b6c27d620cddc3

本商品はMofcosmos( https://moff.booth.pm/ )さんとのコラボ商品になります。
モデル、テクスチャ、動画等でご協力いただいています。


# 特徴
- グラスを手に持って傾けると中身が揺れる
- グラスを手に持ってさらに傾けると中身が減る
- ボトルを手に持って Use して傾けるとグラスに注げる


# 動作環境
本商品は Creator Companion 移行後のプロジェクトを想定して構築しています。
そのため、Creator Companion への移行は必須となる旨をご理解ください。

- Unity 2022.3.22f1
- VRChat SDK - Base 3.7.0 以上
- VRChat SDK - World 3.7.0 以上


# 導入方法
1. 事前準備
最新の VRCSDK と UdonSharp の2点を導入してください。

2. 解凍したzipファイルに同梱されている unitypackage をUnityにインポートします。

3. Assets/TpLab/DrinkableAlcoholic/Prefabs内にある Prefab を Hierarchy にドラッグ＆ドロップします。
Prefab は用途に応じて下記から選択してください。

　Assets/TpLab/DrinkableAlcoholic/Prefabs/Bottle/
　- WhiskeyBottle 　 　: ウィスキーボトル
　- WineBottle 　 　 　: ワインボトル

　Assets/TpLab/DrinkableAlcoholic/Prefabs/Glass/
　- EmeraldCoolerGlass: カクテル（エメラルドクーラー）のグラス
　- TokyoStationGlass　: カクテル（東京駅）のグラス
　- WhiskeyGlass 　 　  : ウィスキーのグラス
　- WineGlass 　 　 　 : ワインのグラス

　Assets/TpLab/DrinkableAlcoholic/Prefabs/
　- WhiskeySet　 　 　: ウィスキーのボトルとグラス
　- WineSet　 　 　 　: ワインのボトルとグラス

4. グラスのInspector上で設定を行います。
[TargetStreams]
グラスにお酒を注ぐパーティクルの名前を指定します。
Sizeに0を指定すると全てのパーティクルに反応してお酒が注がれます。

[Pour Speed]
ボトルからグラスにお酒を注ぐ速度を指定します。

[Drink Speed]
グラスを傾けた際にお酒を飲む速度を指定します。


＜補足＞
1. ウィスキーボトルでウィスキーのグラスに注げます。
2. ワインボトルでワインのグラスに注げます。
3. カクテルは Use することで中身が満タンになります。
4. ボトルやグラスの光沢を美しく見せるためには、ワールドに ReflectionProbe を配置する必要があります。

＜参考サイト＞
Reflection Probeを置いて”映える”ワールドを作ろう
https://creator.cluster.mu/2022/03/22/misaka-1/


# 利用規約
本規約は、あしやまひろこ(@hiorko_TB)氏が作成したVN3ライセンス( https://www.vn3.org/ )のテンプレートを使用しています。

本商品を購入した時点で本利用規約に同意したものとみなします。ご購入前に必ずご確認いただきますようお願いいたします。

----
These Terms of Use are based on the VN3 licensed ( https://www.vn3.org/ ) template created by Hiroko Ashiyama (@hiorko_TB).

By purchasing this product, you agree to these Terms of Use. Please be sure to read them before purchasing this product.

利用規約（JP）
https://drive.google.com/file/d/1b2ZNnNH2Gr56RvBghPeijMMIIc9HJjgO/view?usp=sharing

Terms of use（EN）
https://drive.google.com/file/d/10x3d0obFzWXTFJ73-ckQFr93EM63UYpv/view?usp=sharing

이용규약（KO）
https://drive.google.com/file/d/1k_dKLvxuys17J67v0DO_7RRlEFWhWyxk/view?usp=sharing


# 更新履歴
[2024-03-23: v1.0.6]
一部テクスチャにMipMapが設定されていない問題を修正

[2023-08-12: v1.0.5]
アバターのパーティクルがグラスに衝突した際にエラーが発生する問題を修正

[2023-03-21: v1.0.4]
名前空間の競合対策を追加

[2022-10-28: v1.0.3]
CreatorCompanion対応前の unitypackage に誤りがあったため修正

[2022-10-23: v1.0.2]
・グラスやボトルの透明度/反射率の調整
・SecondEdition追加に伴う構成変更

[2022-09-01: v1.0.1 U1.0]
CreatorCompanion対応の unitypackage を追加

[2022-07-18: v1.0.1]
unitypackage 内の不要なファイルを削除

[2022-07-15: v1.0.0]
公開


# Boothリンク
https://tp-lab.booth.pm/items/3999585
