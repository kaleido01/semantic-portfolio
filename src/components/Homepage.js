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
							<Header as="h2">Welcome to Myhomepage</Header>
						</Segment>
						<Segment attached>
							プログラミング言語について学習を進めてきたのでついにポートフォリオなるものを作りました。
							他にもTwitter,ブログなどやっているのでそちらも合わせてみていただければと思います。
							このサイトはすべてReact及びSemantic-UIを使ってコーディングしています。
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
							<Header as="h2">目的</Header>
						</Segment>
						<Segment attached="bottom">
							夏休み期間中にPythonまたはReact関係のインターンに参加したいと思っています。
							そこでポートフォリオなるものを作成し、今後自作アプリや簡単なスキルなどを見られるものを用意しておくことでより円滑に進めるためです。
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
