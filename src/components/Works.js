import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
	Grid,
	Message,
	Segment,
	Label,
	Dimmer,
	Header,
	Divider,
	Icon,
	Button
} from "semantic-ui-react";
class Works extends Component {
	render() {
		return (
			<Grid centered textAlign="center" verticalAlign stackable>
				<Grid.Row>
					<Grid.Column width={10} textAlign="center">
						<Message floating info style={{ marginTop: "1em" }}>
							<Message.Header>
								ここでは自分の制作物について順次載せていこうと思います。
							</Message.Header>
							<Message.Content />
						</Message>
					</Grid.Column>
				</Grid.Row>

				<Grid.Column width={8}>
					<Segment.Group raised>
						<Segment
							attached="top"
							color="green"
							inverted
							tertiary
							style={{ border: "none" }}>
							<Label as="a" color="orange" ribbon="right">
								React＆Redux＆Firebase
							</Label>
							<span>
								<Header as="h2" textAlign="center" color="white" inverted>
									Devchat
								</Header>
							</span>
						</Segment>
						<Segment attached textAlign="center">
							<Divider horizontal>
								<Header as="h4">
									<Icon name="tag" />
									使ったスキル
								</Header>
							</Divider>
							<p>React</p>
							<p>Redux</p>
							<p>Semanti-Ui-css</p>
							<p>Semanti-Ui-React</p>
							<p>Firebase authentication</p>
							<p>Firebase realtime database</p>
							<Divider horizontal>
								<Header as="h4">
									<Icon name="comment" />
									コンテンツ
								</Header>
							</Divider>
							Slack模倣アプリになります。firebaseのリアルタイムデータベースを使うことでリアルタイムチャットおよびユーザーのログイン状況などの確認が出来ます
						</Segment>
						<Segment attached="bottom" textAlign="center">
							<Button
								as="a"
								href="https://react-slack-clone-46d29.firebaseapp.com/login"
								color="blue"
								target="_brank">
								<Icon name="checkmark" />
								webアプリをチェック
							</Button>
						</Segment>
					</Segment.Group>
				</Grid.Column>
			</Grid>
		);
	}
}

export default Works;
