import React, { Component } from "react";
import {
	Grid,
	Segment,
	Header,
	Rating,
	Divider,
	Icon
} from "semantic-ui-react";

class Skills extends Component {
	render() {
		return (
			<Grid textAlign="center" stackable inverted>
				<Grid.Column width={5}>
					<Segment attached="top" textAlign="center">
						<Header as="h3" textAlign="center">
							<p>React ＆ Redux</p>
							<Rating
								maxRating={5}
								defaultRating={5}
								icon="star"
								size="small"
								disabled
							/>
							<div className="languages__icon">
								<Icon name="react" color="blue" size="big" />
							</div>
						</Header>
						<Divider horizontal>
							<Header as="h4">
								<Icon name="tag" />
								Level
							</Header>
						</Divider>
						<p>
							jsのフレームワークとして勉強しています。Udemy中心にRedux及び最新のContext,Hooksも勉強してます。
							アプリは既に何個か動画見ながら作っているので基本的な部分については問題ないと思います。
							一番勉強してる言語でつい最近完全オリジナルでwebアプリDeployしました。
						</p>
					</Segment>
				</Grid.Column>
				<Grid.Column width={5}>
					<Segment attached="top" textAlign="center">
						<Header as="h3" textAlign="center">
							<p>Node.js</p>
							<Rating
								maxRating={5}
								defaultRating={5}
								icon="star"
								size="small"
								disabled
							/>
							<div className="languages__icon">
								<Icon name="node" color="green" size="big" />
							</div>
						</Header>
						<Divider horizontal>
							<Header as="h4">
								<Icon name="tag" />
								Level
							</Header>
						</Divider>
						<p>
							バックエンドとして使用しています。一応Node.js単体でejsファイルでのWebアプリを作ったこともあります。
							基本的にはReact+Node.jsでMongodb,graphqlを使用する際に使っています。
							validationやauthenticated,Routing等も扱ったことがあります。
						</p>
					</Segment>
				</Grid.Column>
				<Grid.Column width={5}>
					<Segment attached="top" textAlign="center">
						<Header as="h3" textAlign="center">
							<p>Mongodb ＆ Graphql</p>
							<Rating
								maxRating={5}
								defaultRating={5}
								icon="star"
								size="small"
								disabled
							/>
							<div className="languages__icon">
								<Icon name="database" color="purple" size="big" />
							</div>
						</Header>
						<Divider horizontal>
							<Header as="h4">
								<Icon name="tag" />
								Level
							</Header>
						</Divider>
						<p>
							Reactでアプリ制作する際のDBは主にこの二つ使っています。自作Webアプリで、MongoDBにはmongoose,
							GraphQLにはApolloserver,ApolloClient開発しています。
							等をNode.jsと組み合わせて使うことが出来ます。
						</p>
					</Segment>
				</Grid.Column>
				<Grid.Column width={5}>
					<Segment attached="top" textAlign="center">
						<Header as="h3" textAlign="center">
							<p>Django</p>
							<Rating
								maxRating={5}
								defaultRating={3}
								icon="star"
								size="small"
								disabled
							/>
							<div className="languages__icon">
								<Icon name="python" size="big" color="blue" />
							</div>
						</Header>
						<Divider horizontal>
							<Header as="h4">
								<Icon name="tag" />
								Level
							</Header>
						</Divider>
						<p>
							基本的なブログ程度のアプリは作成可能です。GraphqlのデータベースとしてDjangoのmodelを使ったこともあります。
						</p>
					</Segment>
				</Grid.Column>
				<Grid.Column width={5}>
					<Segment attached="top" textAlign="center">
						<Header as="h3" textAlign="center">
							<p>firebase</p>
							<Rating
								maxRating={5}
								defaultRating={3}
								icon="star"
								size="small"
								disabled
							/>
							<div className="languages__icon">
								<Icon name="fire" color="orange" size="big" />
							</div>
						</Header>
						<Divider horizontal>
							<Header as="h4">
								<Icon name="tag" />
								Level
							</Header>
						</Divider>
						<p>
							Worksにおいてあるアプリの認証部分で使用済み。基本的なオンラインオフラインの扱いと認証部分についてはできます
						</p>
					</Segment>
				</Grid.Column>
				<Grid.Column width={5}>
					<Segment attached="top" textAlign="center">
						<Header as="h3" textAlign="center">
							<p>SemanticUi</p>
							<Rating
								maxRating={5}
								defaultRating={3}
								icon="star"
								size="small"
								disabled
							/>
							<div className="languages__icon">
								<Icon name="leaf" color="brown    " size="big" />
							</div>
						</Header>
						<Divider horizontal>
							<Header as="h4">
								<Icon name="tag" />
								Level
							</Header>
						</Divider>
						<p>
							Bootstrapも使っていましたがReactとは合わないのでこちらに変えました。主にコンポーネントを使って足りない部分をcssで補強って感じで使っています。
							他にもMaterialUiも使ったことがありますが一番お気に入りはSemanticUiです。
						</p>
					</Segment>
				</Grid.Column>
			</Grid>
		);
	}
}

export default Skills;
