import React, { Component } from "react";
import { Grid, Message, Segment, Header, Rating } from "semantic-ui-react";

class Profile extends Component {
	render() {
		return (
			<Grid centered textAlign="center" verticalAlign stackable>
				<Grid.Row>
					<Grid.Column width={10} textAlign="center">
						<Message floating info style={{ marginTop: "1em" }}>
							<Message.Header>
								ここでは簡単にカレイドの自己紹介をしておきます。
							</Message.Header>
							<Message.Content />
						</Message>
					</Grid.Column>
				</Grid.Row>
				<Grid.Column width={6}>
					<Segment
						inverted
						floated
						textAlign="center"
						color="olive"
						attached="top"
						style={{ border: "none" }}>
						<Header as="h2">現在</Header>
					</Segment>
					<Segment attached>
						<p>埼玉県在住</p>
						<p>都内の大学に通う24歳理系の大学院生です</p>
						<p>就活は既に終わっていて大手の外資系IT企業に行く予定です。</p>
						<p>
							稼ぐ力を身に着けるためにブログとプログラミングに本気で取り組んでいます。
						</p>
					</Segment>
				</Grid.Column>
				<Grid.Column width={6}>
					<Segment
						inverted
						floated
						textAlign="center"
						color="olive"
						attached="top"
						style={{ border: "none" }}>
						<Header as="h2">現在に至るまでの思考過程</Header>
					</Segment>
					<Segment attached>
						<p>
							給料がいいかつ安定=大企業という考えと大学の学部の関係からメーカー系へ行く予定でしたが、自分があまり楽しいと思えるタイプの仕事ではなく自分が楽しめる仕事へ着きたいと考えるように
						</p>
						<p>
							昔メイプルストーリーで自分の作ったプログラムを動かしてマクロを組んでいたこともあり、プログラミングへの抵抗は無く楽しさがあった。
							また、バイト先のシステム(クレカ系)が就職先の物だったこともあり,イメージが鮮明に湧くことに
						</p>
						<p>
							ITコンサルに興味を持ちながらも最初は下流をしっかり学ぶことと、自分自身で稼げる重要さを学んだのでプログラミングを勉強すること、及びブログによる資産形成を決意。
						</p>
					</Segment>
				</Grid.Column>
				<Grid.Column width={6}>
					<Segment.Group>
						<Segment
							inverted
							floated
							textAlign="center"
							color="olive"
							attached="top"
							style={{ border: "none" }}>
							<Header as="h2">趣味</Header>
						</Segment>
						<Segment.Group horizontal>
							<Segment>
								<strong>クラロワ</strong>{" "}
							</Segment>
							<Segment>
								<strong> テキサスホールデム</strong>
							</Segment>
							<Segment>
								<strong> バスケ</strong>
							</Segment>
						</Segment.Group>
						<Segment textAlign="center">
							<strong>海外ドラマ</strong>{" "}
						</Segment>
						<Segment.Group>
							<Segment>制覇したもの一覧</Segment>
							<Segment>
								<p>24(Twenty Four)</p>
								<Rating defaultRating={3} maxRating={5} disabled icon="heart" />
							</Segment>
							<Segment>
								<p>メンタリスト</p>
								<Rating defaultRating={3} maxRating={5} disabled icon="heart" />
							</Segment>
							<Segment>
								<p>ウォーキングデッド</p>

								<Rating defaultRating={3} maxRating={5} disabled icon="heart" />
							</Segment>
							<Segment>
								<p>ブレイキングバッド</p>

								<Rating defaultRating={4} maxRating={5} disabled icon="heart" />
							</Segment>
							<Segment>
								<p>Suits</p>

								<Rating defaultRating={4} maxRating={5} disabled icon="heart" />
							</Segment>
							<Segment>
								<p>プリズンブレイク</p>

								<Rating defaultRating={4} maxRating={5} disabled icon="heart" />
							</Segment>
						</Segment.Group>
					</Segment.Group>
				</Grid.Column>
			</Grid>
		);
	}
}

export default Profile;
