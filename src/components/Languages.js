import React, { Component } from "react";
import {
	Grid,
	Segment,
	Header,
	Icon,
	Divider,
	Rating
} from "semantic-ui-react";

class languages extends Component {
	render() {
		return (
			<Grid textAlign="center" stackable inverted>
				<Grid.Column width={5}>
					<Segment attached="top" textAlign="center">
						<Header as="h3" textAlign="center">
							<p>HTML5 ＆ CSS3</p>
							<Rating
								maxRating={5}
								defaultRating={3}
								icon="star"
								size="small"
								disabled
							/>
							<div className="languages__icon">
								<Icon name="html5" color="orange" size="big" />
								<Icon name="css3" color="blue" size="big" />
							</div>
						</Header>
						<Divider horizontal>
							<Header as="h4">
								<Icon name="tag" />
								Level
							</Header>
						</Divider>
						<p>
							もともとはPythonのみのバックグラウンドだったが、自分のアプリやサイト制作も出来るようになりたいということで勉強。
							ポートフォリオ作成できるぐらいの最低限のスキルは学びました。
						</p>
						<p>
							CSSに関してはまだまだ勉強中でかっこいいデザイン作れるように修行中。
						</p>
					</Segment>
				</Grid.Column>
				<Grid.Column width={5}>
					<Segment attached="top" textAlign="center">
						<Header as="h3" textAlign="center">
							<p>JavaScript</p>
							<Rating
								maxRating={5}
								defaultRating={4}
								icon="star"
								size="small"
								disabled
							/>
							<div className="languages__icon">
								<Icon name="js" color="orange" size="big" />
							</div>
						</Header>
						<Divider horizontal>
							<Header as="h4">
								<Icon name="tag" />
								Level
							</Header>
						</Divider>
						<p>
							就職先の社員さんがフロントエンドのデザインで使っているということで最初は軽く始めようとおもったところしっくりはまり、Node.jsと一緒に使うことでアプリが作れることを知りました。
						</p>
						<p>
							フレームワークのReactを中心にアプリをある程度作れる段階まで成長しました。
						</p>
					</Segment>
				</Grid.Column>
				<Grid.Column width={5}>
					<Segment attached="top" textAlign="center">
						<Header as="h3" textAlign="center">
							<p>Python</p>
							<Rating
								maxRating={5}
								defaultRating={3}
								icon="star"
								size="small"
								disabled
							/>
							<div className="languages__icon">
								<Icon
									name="python"
									size="big"
									color="blue"
									className="python__color"
								/>
							</div>
						</Header>
						<Divider horizontal>
							<Header as="h4">
								<Icon name="tag" />
								Level
							</Header>
						</Divider>
						<p>
							大学の研究に集めたデータの整形やグラフ化など、そのほかにも日常的にめんどくさいものはPythonでできないかなと考えるくらいです。
							もともとPython極めるつもりが今はReactメインなのですが、Djangoにて軽いアプリぐらいなら作れます。
						</p>
					</Segment>
				</Grid.Column>
				<Grid.Column width={5}>
					<Segment attached="top" textAlign="center">
						<Header as="h3" textAlign="center">
							<p>Java</p>
							<Rating
								maxRating={5}
								defaultRating={1}
								icon="star"
								size="small"
								disabled
							/>
							<div className="languages__icon">
								<Icon name="coffee" color="black" size="big" />
							</div>
						</Header>
						<Divider horizontal>
							<Header as="h4">
								<Icon name="tag" />
								Level
							</Header>
						</Divider>
						<p>
							大学4年次に英語かプログラミングをやりたいなと思いプログラミングを選択したときにJavaを勉強しました。クラス化やカプセル化、継承などの基本は抑え、
							基本文法使ってPaizaのスキルBはまでは一通り使えてました。
						</p>
					</Segment>
				</Grid.Column>
			</Grid>
		);
	}
}
export default languages;
