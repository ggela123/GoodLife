import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, ImageBackground, } from "react-native";
export default (props) => {
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style={{
					flex: 1,
					backgroundColor: "#FFFFFF",
				}}>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#FFFFFF",
						paddingVertical: 14,
						paddingHorizontal: 23,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/18bcrmj6_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 18,
							height: 18,
							marginRight: 10,
						}}
					/>
					<Text 
						style={{
							color: "#B7B7B7",
							fontSize: 12,
							flex: 1,
						}}>
						{"Location or keywords"}
					</Text>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/oas9ox5f_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 18,
							height: 18,
							marginRight: 3,
						}}
					/>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/k0di04zu_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 9,
							height: 5,
							marginRight: 17,
						}}
					/>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/fxowwkx7_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 18,
							height: 18,
						}}
					/>
				</View>
				<View 
					style={{
						flexDirection: "row",
						backgroundColor: "#FFFFFF",
						paddingVertical: 10,
						paddingLeft: 22,
						paddingRight: 1,
						marginBottom: 1,
					}}>
					<Text 
						style={{
							color: "#2C2C2C",
							fontSize: 14,
							marginRight: 16,
						}}>
						{"Recommended"}
					</Text>
					<Text 
						style={{
							color: "#B7B7B7",
							fontSize: 14,
							marginRight: 15,
						}}>
						{"Europe"}
					</Text>
					<Text 
						style={{
							color: "#B7B7B7",
							fontSize: 14,
							marginRight: 14,
						}}>
						{"Asia"}
					</Text>
					<Text 
						style={{
							color: "#B7B7B7",
							fontSize: 14,
							marginRight: 15,
						}}>
						{"North America"}
					</Text>
					<Text 
						style={{
							color: "#B7B7B7",
							fontSize: 14,
						}}>
						{"So"}
					</Text>
				</View>
				<View 
					style={{
						flexDirection: "row",
						marginBottom: 2,
					}}>
					<ImageBackground 
						source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/0q1lgz0i_expires_30_days.png"}} 
						resizeMode = {'stretch'}
						style={{
							flex: 1,
							paddingVertical: 5,
							marginRight: 2,
						}}
						>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 107,
								marginHorizontal: 10,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/vinlxzc9_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 12,
									height: 12,
									marginRight: 2,
								}}
							/>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 10,
									marginRight: 47,
								}}>
								{"5.0"}
							</Text>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/acowtnir_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 24,
									height: 24,
								}}
							/>
						</View>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 10,
								marginLeft: 91,
							}}>
							{"16"}
						</Text>
					</ImageBackground>
					<ImageBackground 
						source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/askufte8_expires_30_days.png"}} 
						resizeMode = {'stretch'}
						style={{
							flex: 1,
							paddingVertical: 5,
							marginRight: 2,
						}}
						>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 107,
								marginHorizontal: 10,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/xbegbmh1_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 12,
									height: 12,
									marginRight: 2,
								}}
							/>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 10,
									marginRight: 46,
								}}>
								{"4.5"}
							</Text>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/qdhqgtiw_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 24,
									height: 24,
								}}
							/>
						</View>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 10,
								marginLeft: 90,
							}}>
							{"31"}
						</Text>
					</ImageBackground>
					<ImageBackground 
						source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/6xu8oj7u_expires_30_days.png"}} 
						resizeMode = {'stretch'}
						style={{
							flex: 1,
							paddingVertical: 5,
						}}
						>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 107,
								marginHorizontal: 10,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/e0v047vl_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 12,
									height: 12,
									marginRight: 2,
								}}
							/>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 10,
									marginRight: 47,
								}}>
								{"4.9"}
							</Text>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/nwy9pkyx_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 24,
									height: 24,
								}}
							/>
						</View>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 10,
								marginLeft: 91,
							}}>
							{"12"}
						</Text>
					</ImageBackground>
				</View>
				<View 
					style={{
						flexDirection: "row",
						marginBottom: 1,
					}}>
					<ImageBackground 
						source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/594e0cdu_expires_30_days.png"}} 
						resizeMode = {'stretch'}
						style={{
							flex: 1,
							paddingVertical: 6,
							marginRight: 2,
						}}
						>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 108,
								marginHorizontal: 10,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/4lkzjkno_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 12,
									height: 12,
									marginRight: 2,
								}}
							/>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 10,
									marginRight: 47,
								}}>
								{"4.8"}
							</Text>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/or9bzn9b_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 24,
									height: 24,
								}}
							/>
						</View>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 10,
								marginLeft: 95,
							}}>
							{"8"}
						</Text>
					</ImageBackground>
					<ImageBackground 
						source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/rdm19ujb_expires_30_days.png"}} 
						resizeMode = {'stretch'}
						style={{
							flex: 1,
							paddingVertical: 6,
							marginRight: 2,
						}}
						>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 106,
								marginHorizontal: 10,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/ft0q3w4r_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 12,
									height: 12,
									marginRight: 2,
								}}
							/>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 10,
									marginRight: 46,
								}}>
								{"4.8"}
							</Text>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/jqx4nr1l_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 24,
									height: 24,
								}}
							/>
						</View>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 10,
								marginLeft: 91,
							}}>
							{"22"}
						</Text>
					</ImageBackground>
					<ImageBackground 
						source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/575bkkic_expires_30_days.png"}} 
						resizeMode = {'stretch'}
						style={{
							flex: 1,
							paddingVertical: 6,
						}}
						>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 106,
								marginHorizontal: 10,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/om2o9rmx_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 12,
									height: 12,
									marginRight: 2,
								}}
							/>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 10,
									marginRight: 47,
								}}>
								{"4.2"}
							</Text>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/vdo8yisz_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 24,
									height: 24,
								}}
							/>
						</View>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 10,
								marginLeft: 91,
							}}>
							{"12"}
						</Text>
					</ImageBackground>
				</View>
				<View 
					style={{
						flexDirection: "row",
						marginBottom: 1,
					}}>
					<ImageBackground 
						source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/zsdtww79_expires_30_days.png"}} 
						resizeMode = {'stretch'}
						style={{
							flex: 1,
							paddingVertical: 8,
							marginRight: 2,
						}}
						>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 104,
								marginHorizontal: 10,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/qry2mhz4_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 12,
									height: 12,
									marginRight: 2,
								}}
							/>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 10,
									marginRight: 47,
								}}>
								{"4.7"}
							</Text>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/nfgtecze_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 24,
									height: 24,
								}}
							/>
						</View>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 10,
								marginLeft: 91,
							}}>
							{"42"}
						</Text>
					</ImageBackground>
					<ImageBackground 
						source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/q6f4yi8s_expires_30_days.png"}} 
						resizeMode = {'stretch'}
						style={{
							flex: 1,
							paddingVertical: 8,
							marginRight: 2,
						}}
						>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 104,
								marginHorizontal: 10,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/e8h0ygqm_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 12,
									height: 12,
									marginRight: 2,
								}}
							/>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 10,
									marginRight: 46,
								}}>
								{"4.0"}
							</Text>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/5tk1hsk5_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 24,
									height: 24,
								}}
							/>
						</View>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 10,
								marginLeft: 91,
							}}>
							{"56"}
						</Text>
					</ImageBackground>
					<ImageBackground 
						source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/50md1aig_expires_30_days.png"}} 
						resizeMode = {'stretch'}
						style={{
							flex: 1,
							paddingVertical: 8,
						}}
						>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 104,
								marginHorizontal: 10,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/dm49e6xd_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 12,
									height: 12,
									marginRight: 2,
								}}
							/>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 10,
									marginRight: 47,
								}}>
								{"4.9"}
							</Text>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/792aj0zt_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 24,
									height: 24,
								}}
							/>
						</View>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 10,
								marginLeft: 91,
							}}>
							{"60"}
						</Text>
					</ImageBackground>
				</View>
				<View 
					style={{
						flexDirection: "row",
					}}>
					<ImageBackground 
						source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/4qu6dnzi_expires_30_days.png"}} 
						resizeMode = {'stretch'}
						style={{
							flex: 1,
							flexDirection: "row",
							paddingTop: 6,
							paddingBottom: 127,
							marginRight: 2,
						}}
						>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/6pdl8ldl_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 12,
								height: 12,
								marginTop: 5,
								marginBottom: 7,
								marginLeft: 10,
								marginRight: 2,
							}}
						/>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 10,
								marginTop: 5,
								marginBottom: 7,
								marginRight: 47,
							}}>
							{"5.0"}
						</Text>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/4s49kkai_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 24,
								height: 24,
								marginRight: 10,
							}}
						/>
					</ImageBackground>
					<ImageBackground 
						source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/4dp1aaq3_expires_30_days.png"}} 
						resizeMode = {'stretch'}
						style={{
							flex: 1,
							flexDirection: "row",
							paddingTop: 6,
							paddingBottom: 129,
							marginRight: 2,
						}}
						>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/bckqhiui_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 12,
								height: 12,
								marginTop: 5,
								marginBottom: 7,
								marginLeft: 10,
								marginRight: 2,
							}}
						/>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 10,
								marginTop: 5,
								marginBottom: 7,
								marginRight: 46,
							}}>
							{"5.0"}
						</Text>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/kscnbafo_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 24,
								height: 24,
								marginRight: 10,
							}}
						/>
					</ImageBackground>
					<ImageBackground 
						source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/2vdj9ib7_expires_30_days.png"}} 
						resizeMode = {'stretch'}
						style={{
							flex: 1,
							flexDirection: "row",
							paddingTop: 6,
							paddingBottom: 89,
						}}
						>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/vht18voq_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 12,
								height: 12,
								marginTop: 5,
								marginBottom: 7,
								marginLeft: 10,
								marginRight: 2,
							}}
						/>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 10,
								marginTop: 5,
								marginBottom: 7,
								marginRight: 47,
							}}>
							{"5.0"}
						</Text>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/7g7thd2v_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 24,
								height: 24,
								marginRight: 10,
							}}
						/>
					</ImageBackground>
				</View>
				<ImageBackground 
					source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/7x50ewv5_expires_30_days.png"}} 
					resizeMode = {'stretch'}
					>
					<View 
						style={{
							backgroundColor: "#FFFFFF",
							marginBottom: 45,
						}}>
						<View 
							style={{
								height: 1,
								backgroundColor: "#D0D0D0",
								marginBottom: 8,
							}}>
						</View>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginHorizontal: 34,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/c1txpgcc_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 24,
									height: 24,
								}}
							/>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/ja0fjaox_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 24,
									height: 24,
								}}
							/>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/7n3wcgua_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 28,
									height: 28,
								}}
							/>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/5fjoe8j2_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 24,
									height: 24,
								}}
							/>
						</View>
					</View>
				</ImageBackground>
			</ScrollView>
		</SafeAreaView>
	)
}