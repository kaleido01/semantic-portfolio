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
							お金を稼ぐために勉強をして大学へ入り成り行きでメーカーを志望していたが、40年近くこの仕事を続けるのは無理なのと
							どうせなら自分が楽しいと思える仕事をしたくなった。
						</p>
						<p>
							昔メイプルストーリで自分の作ったプログラムを動かしてマクロを組んでいたこともあり、プログラミングへの抵抗は無く楽しさがあった。
						</p>
						<p>
							ITコンサルに興味を持ちながらも最初は下流をしっかり学ぶことと、自分自身で稼げる重要さを学んだのでプログラミングを勉強することを決意。
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
						<Header as="h2">趣味</Header>
					</Segment>
					<Segment attached>
						<p>クラロワ</p>
						<p>テキサスホールデム</p>
						<p>バスケ</p>
						<p>海外ドラマ</p>
					</Segment>
					<Segment.Group attached="bottom">
						<Segment>
							<Header as="h4">制覇した海外ドラマ</Header>
						</Segment>
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
				</Grid.Column>
			</Grid>
		);
	}
}

export default Profile;
