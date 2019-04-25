import React, { Component } from "react";
import { Grid, Message } from "semantic-ui-react";

class Profile extends Component {
	render() {
		return (
			<Grid centered textAlign="center" verticalAlign stackable>
				<Grid.Row>
					<Grid.Column width={10}>
						<Message floating>
							<Message.Header>ようこそ</Message.Header>
							<Message.Content>
								訪問ありがとうございます。ここはカレイドのポートフォリオトップページです。
								このサイトはすべてReact及びSemantic-UIを使ってコーディングしています。
							</Message.Content>
						</Message>
					</Grid.Column>
				</Grid.Row>
				<Grid.Column width={6}>
					<Message floating>
						<Message.Header>ようこそ</Message.Header>
						<Message.Content>
							訪問ありがとうございます。ここはカレイドのポートフォリオトップページです。
							このサイトはすべてReact及びSemantic-UIを使ってコーディングしています。
						</Message.Content>
					</Message>
				</Grid.Column>
				<Grid.Column width={6}>
					<Message floating>
						<Message.Header>ようこそ</Message.Header>
						<Message.Content>
							訪問ありがとうございます。ここはカレイドのポートフォリオトップページです。
							このサイトはすべてReact及びSemantic-UIを使ってコーディングしています。
						</Message.Content>
					</Message>
				</Grid.Column>
				<Grid.Column width={6}>
					<Message floating>
						<Message.Header>ようこそ</Message.Header>
						<Message.Content>
							訪問ありがとうございます。ここはカレイドのポートフォリオトップページです。
							このサイトはすべてReact及びSemantic-UIを使ってコーディングしています。
						</Message.Content>
					</Message>
				</Grid.Column>
				<Grid.Column width={6}>
					<Message floating>
						<Message.Header>ようこそ</Message.Header>
						<Message.Content>
							訪問ありがとうございます。ここはカレイドのポートフォリオトップページです。
							このサイトはすべてReact及びSemantic-UIを使ってコーディングしています。
						</Message.Content>
					</Message>
				</Grid.Column>
			</Grid>
		);
	}
}

export default Profile;
