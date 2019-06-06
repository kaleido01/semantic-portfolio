import React, { Component } from "react";
import { Grid, Segment, Header, Button } from "semantic-ui-react";

class Homepage extends Component {
	render() {
		return (
			<Grid centered textAlign="center" className="toppage">
				<Grid.Row>
					<Grid.Column width={9} className="top-content">
						<Segment
							inverted
							floated
							textAlign="center"
							color="teal"
							attached="top"
							style={{ border: "none" }}>
							<Header as="h2">Welcome to MyPortfolio</Header>
						</Segment>
						<Segment attached>
							プログラミング学習して4ヶ月Webアプリのデプロイまで漕ぎつけたので一新いたしました。
							Worksには自分の自作Webアプリを載せているで手っ取り早く見たい人はそこを見ていただくのが一番早いと思います。
						</Segment>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column width={9} className="top-content">
						<Segment
							inverted
							color="teal"
							attached="top"
							style={{ border: "none" }}
							textAlign="center">
							<Header as="h2">ポートフォリオ作成目的</Header>
						</Segment>
						<Segment attached="bottom">
							自分がどういったスキルを保有しているか出来ることなどをまとめておいた方がインターンの活動や自分を知ってもらうために一番いいと考えたので作成いたしました。
						</Segment>
					</Grid.Column>
				</Grid.Row>

				<Grid.Column width={9} textAlign="center" className="top-content">
					<Header as="h3">Share</Header>
					<Button
						circular
						color="twitter"
						icon="twitter"
						as="a"
						href="https://twitter.com/share?ref_src=twsrc%5Etfw"
						className="twitter-share-button twitter__share"
						data-show-count="false"
						size="massive"
						target="_brank"
					/>
				</Grid.Column>
			</Grid>
		);
	}
}

export default Homepage;
