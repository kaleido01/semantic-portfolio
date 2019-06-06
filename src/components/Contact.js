import React, { Component } from "react";
import { Grid, Message, Segment, Header, Button } from "semantic-ui-react";

class Contact extends Component {
	render() {
		return (
			<Grid centered textAlign="center" verticalAlign stackable>
				<Grid.Row>
					<Grid.Column width={10} textAlign="center">
						<Message floating info style={{ marginTop: "1em" }}>
							<Message.Header>
								普段はTwitter、ブログに生息しています。
							</Message.Header>
							日々のプログラミングの勉強成果や、気を付けるべきことについて発信したり。
							将来の独立へ向けてのマインドやビジネスについても発信しているので面白いなと思ったらぜひフォローしてください！
							ご連絡は私のツイッターかもしくはブログのお問い合わせフォームからご連絡いただければ幸いです。
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
						<Header as="h2">Connect</Header>
					</Segment>
					<Segment attached textAlign="center">
						<Button
							circular
							content="twitter"
							color="twitter"
							icon="twitter"
							as="a"
							href="https://twitter.com/kaleidoblog"
							className="connect__button"
							target="_brank"
						/>

						<Button
							circular
							color="orange"
							icon="blogger"
							content="Blog"
							as="a"
							href="https://kaleido01.com/"
							className="connect__button"
							target="_brank"
						/>
					</Segment>
				</Grid.Column>
			</Grid>
		);
	}
}

export default Contact;
