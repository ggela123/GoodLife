import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';

import * as onboardingStoreModule from '../../onboardingStore';
const onboardingStore = onboardingStoreModule && onboardingStoreModule.default ? onboardingStoreModule.default : onboardingStoreModule;

import countriesLocal from '../../data/countries';
import BackButton from '../components/BackButton';
import { supabase } from '../../supabase/supabaseClient';

const codeToFlagEmoji = (code) => {
	if (!code || code.length !== 2) return '';
	const A = 0x1f1e6;
	const chars = [...code.toUpperCase()].map(c => A + c.charCodeAt(0) - 65);
	try { return String.fromCodePoint(...chars); } catch (e) { return ''; }
};

export default ({ navigation }) => {
	// read selected continent from onboardingStore (set on previous screen)
	const onboarding = onboardingStore.getOnboarding ? onboardingStore.getOnboarding() : {};
	const selectedContinentId = onboarding && Array.isArray(onboarding.continent_ids) && onboarding.continent_ids.length ? onboarding.continent_ids[0] : null;

	// continent -> set of ISO codes mapping (keep consistent with WhereWouldYouLikeToTravelTo CONTINENTS)
	const CONTINENT_CODES = {
		1: new Set([ // Europe
			'AL','AD','AT','BY','BE','BA','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GI','GR','HU','IS','IE','IM','IT','JE','LV','LI','LT','LU','MT','MD','MC','ME','NL','MK','NO','PL','PT','RO','RU','SM','RS','SK','SI','ES','SE','CH','UA','GB','VA'
		]),
		2: new Set([ // Asia
			'AF','AM','AZ','BH','BD','BT','BN','KH','CN','GE','IN','ID','IR','IQ','IL','JP','JO','KZ','KW','KG','LA','LB','MO','MY','MV','MN','MM','NP','KP','OM','PK','PS','PH','QA','SA','SG','KR','LK','SY','TW','TJ','TH','TL','TR','TM','AE','UZ','VN','YE','HK'
		]),
		3: new Set([ // North America
			'AG','BS','BB','BZ','BM','CA','CR','CU','DM','DO','SV','GL','GD','GP','GT','HT','HN','JM','MQ','MX','MS','NI','PA','PR','BL','KN','LC','MF','PM','VC','SX','TC','US','VG','VI'
		]),
		4: new Set([ // South America
			'AR','BO','BR','CL','CO','EC','GF','GY','PY','PE','SR','UY','VE'
		]),
		5: new Set([ // Oceania
			'AU','NZ','FJ','KI','MH','FM','NR','PW','PG','WS','SB','TO','TV','VU','NC'
		]),
		6: new Set([ // Africa
			'DZ','AO','BJ','BW','BF','BI','CV','CM','CF','TD','KM','CG','CD','CI','DJ','EG','GQ','ER','ET','GA','GM','GH','GN','GW','KE','LS','LR','LY','MG','MW','ML','MR','MU','MA','MZ','NA','NE','NG','RW','RE','SH','ST','SN','SC','SL','SO','ZA','SS','SD','SZ','TZ','TG','TN','UG','EH','ZM','ZW'
		])
	};
	const [selected, setSelected] = useState([null, null, null]);
	const [openIndex, setOpenIndex] = useState(null);
	const [countriesList, setCountriesList] = useState(countriesLocal);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		let mounted = true;
		async function load() {
			setLoading(true);
			try {
				const { data, error: fetchErr } = await supabase.from('countries').select('code,name').order('name', { ascending: true });
				if (fetchErr) throw fetchErr;
				if (mounted && Array.isArray(data) && data.length > 0) {
					setCountriesList(data.map(d => ({ code: (d.code||'').toUpperCase(), name: d.name || '' })));
				}
			} catch (e) {
				console.warn('Failed to load countries from Supabase, falling back to local list', e && e.message ? e.message : e);
				setError(e && e.message ? e.message : String(e));
			} finally { if (mounted) setLoading(false); }
		}
		load();
		return () => { mounted = false; };
	}, []);

	function openSlot(i) {
		setOpenIndex(openIndex === i ? null : i);
	}

	function pickCountryForSlot(i, country) {
		const already = selected.findIndex(s => s && s.code === country.code);
		if (already !== -1 && already !== i) {
			// prevent duplicate selection
			setOpenIndex(null);
			return;
		}
		const next = [...selected];
		next[i] = { code: country.code, name: country.name };
		setSelected(next);
		setOpenIndex(null);
	}

	function renderSlot(i) {
		const slot = selected[i];
		return (
			<View key={i}>
				<Text style={{ color: '#2C2C2C', fontSize: 12, marginBottom: 8, marginLeft: 15 }}>{'Select Country'}</Text>
				<TouchableOpacity onPress={() => openSlot(i)} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', borderColor: '#868686', borderRadius: 15, borderWidth: 1, paddingVertical: 11, paddingHorizontal: 18, marginBottom: 24, marginHorizontal: 15 }}>
					<Text style={{ fontSize: 18, marginRight: 12 }}>{slot ? codeToFlagEmoji(slot.code) : '🏳️'}</Text>
					<Text style={{ color: '#626365', fontSize: 12, flex: 1 }}>{slot ? slot.name : 'Select a country'}</Text>
					<Text style={{ fontSize: 18, color: '#9b9b9b' }}>{'›'}</Text>
				</TouchableOpacity>

				{openIndex === i && (
					<View style={{ maxHeight: 260, borderRadius: 8, borderWidth: 1, borderColor: '#eee', marginHorizontal: 15, marginBottom: 12 }}>
						{loading ? (
							<View style={{ padding: 20, alignItems: 'center' }}><ActivityIndicator/></View>
						) : (
											<FlatList
												data={(() => {
													if (!selectedContinentId) return countriesList;
													const allowed = CONTINENT_CODES[selectedContinentId];
													if (!allowed) return countriesList;
													return countriesList.filter(c => allowed.has((c.code||'').toUpperCase()));
												})()}
												keyExtractor={item => item.code}
												renderItem={({item}) => (
													<TouchableOpacity onPress={() => pickCountryForSlot(i, item)} style={{ padding: 12, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#f1f1f1' }}>
														<Text style={{ fontSize: 18, marginRight: 12 }}>{codeToFlagEmoji(item.code)}</Text>
														<Text style={{ flex: 1 }}>{item.name}</Text>
														<Text style={{ color: '#666' }}>{item.code}</Text>
													</TouchableOpacity>
												)}
											/>
						)}
						{/* suppress raw error messages from UI for security */}
						{error ? null : null}
					</View>
				)}
			</View>
		);
	}

	function handleNext() {
		const codes = selected.filter(Boolean).map(s => s.code);
		if (onboardingStore && typeof onboardingStore.setOnboarding === 'function') {
			onboardingStore.setOnboarding({ visit_country_codes: codes });
			console.log('onboarding: visit_country_codes stored ->', codes);
			console.log('onboarding state ->', onboardingStore.getOnboarding ? onboardingStore.getOnboarding() : onboardingStore);
		}
		navigation.navigate('WhatOpportunitiesAreYouLookingFor');
	}

	return (
		<SafeAreaView style={{ flex:1, backgroundColor: '#FFFFFF' }}>
			<ScrollView style={{ flex:1, backgroundColor: '#FFFFFF' }}>
				<BackButton navigation={navigation} />
				<View style={{ alignItems: 'center', marginBottom: 39 }}>
					<Text style={{ color: '#2551A1', fontSize: 20, fontWeight: 'bold', textAlign: 'center', width: 241 }}>{'Which countries would you like to visit?'}</Text>
				</View>
				<Text style={{ color: '#626365', fontSize: 15, marginBottom: 5, marginLeft: 13 }}>{'Select up to 3'}</Text>
				<View style={{ height: 1, backgroundColor: '#868686', marginBottom: 26, marginHorizontal: 13 }} />

				{renderSlot(0)}
				{renderSlot(1)}
				{renderSlot(2)}

				<View style={{ paddingBottom: 45 }}>
					<View style={{ backgroundColor: '#FFFFFF', paddingTop:3, paddingBottom: 28 }}>
						<View style={{ height:1, backgroundColor: '#868686', marginBottom:23, marginHorizontal:15 }} />
						<TouchableOpacity
							style={{ alignItems: 'center', backgroundColor: (selected && selected.some(Boolean)) ? '#2551A1' : '#B7B7B7', borderRadius: 100, paddingVertical: 14, marginHorizontal: 15 }}
							disabled={!(selected && selected.some(Boolean))}
							onPress={() => { if (!(selected && selected.some(Boolean))) return; handleNext(); }}
						>
							<Text style={{ color: '#FFFFFF', fontSize: 14 }}>{'Next'}</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};