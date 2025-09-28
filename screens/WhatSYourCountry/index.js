import React, { useState, useMemo } from 'react';
import {
	SafeAreaView,
	View,
	Text,
	TouchableOpacity,
	TextInput,
	FlatList,
	Image,
} from 'react-native';

// defensive import - onboardingStore may be default-wrapped by bundler
import * as onboardingStoreModule from '../../onboardingStore';
const onboardingStore = onboardingStoreModule && onboardingStoreModule.default ? onboardingStoreModule.default : onboardingStoreModule;

import countriesListLocal from '../../data/countries';
import { supabase } from '../../supabase/supabaseClient';
import { ActivityIndicator } from 'react-native';

export default ({ navigation }) => {
	const [selected, setSelected] = useState(null);
		const [open, setOpen] = useState(false);

	const [countriesList, setCountriesList] = useState(countriesListLocal);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	// load from supabase on mount
	React.useEffect(() => {
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
				console.warn('Failed to load countries from Supabase, falling back to local list', e.message || e);
				setError(e.message || String(e));
			} finally {
				if (mounted) setLoading(false);
			}
		}
		load();
		return () => { mounted = false; };
	}, []);

	const filtered = countriesList; // no search box; show full list when open

		// Convert ISO 3166-1 alpha-2 code to flag emoji
		function codeToFlagEmoji(code) {
			if (!code || code.length !== 2) return '';
			const A = 0x1f1e6; // regional indicator symbol letter A
			const chars = [...code.toUpperCase()].map(c => A + c.charCodeAt(0) - 65);
			try {
				return String.fromCodePoint(...chars);
			} catch (e) {
				return '';
			}
		}

	function handleNext() {
		// store selected country code; if none selected, store null
		const payload = { origin_country_code: selected ? selected.code : null };
		if (onboardingStore && typeof onboardingStore.setOnboarding === 'function') {
			onboardingStore.setOnboarding(payload);
			console.log('onboardingStore now:', onboardingStore.getOnboarding ? onboardingStore.getOnboarding() : onboardingStore);
		} else {
			console.warn('onboardingStore.setOnboarding not available', Object.keys(onboardingStore || {}));
		}
		navigation.navigate('WhereWouldYouLikeToTravelTo');
	}

	function renderItem({ item }) {
		const isSelected = selected && selected.code === item.code;
		return (
			<TouchableOpacity
				onPress={() => { setSelected(item); setOpen(false); }}
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					paddingHorizontal: 15,
					paddingVertical: 12,
					borderBottomWidth: 1,
					borderBottomColor: '#eee',
					backgroundColor: isSelected ? '#eef6ff' : '#fff',
				}}
			>
				<Text style={{ fontSize: 18, marginRight: 12 }}>{codeToFlagEmoji(item.code)}</Text>
				<Text style={{ flex: 1 }}>{item.name}</Text>
				<Text style={{ color: '#666' }}>{item.code}</Text>
			</TouchableOpacity>
		);
	}

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
			<View style={{ padding: 15 }}>
				<Image
					source={{ uri: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/8qzvend7_expires_30_days.png' }}
					resizeMode={'stretch'}
					style={{ width: 15, height: 15, marginTop: 8, marginBottom: 12 }}
				/>
				<View style={{ alignItems: 'center', marginBottom: 12 }}>
					<Text style={{ color: '#2551A1', fontSize: 20, fontWeight: 'bold' }}>{'Where are you from?'}</Text>
				</View>

				<Text style={{ color: '#2C2C2C', fontSize: 12, marginBottom: 8 }}>{'Select Country'}</Text>

						<TouchableOpacity
							onPress={() => setOpen(v => !v)}
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								backgroundColor: '#FFFFFF',
								borderColor: '#868686',
								borderRadius: 15,
								borderWidth: 1,
								paddingVertical: 10,
								paddingHorizontal: 14,
								marginBottom: 12,
							}}
						>
							<Text style={{ fontSize: 18, marginRight: 12 }}>{selected ? codeToFlagEmoji(selected.code) : '🌐'}</Text>
							<Text style={{ flex: 1, color: selected ? '#000' : '#626365' }}>{selected ? selected.name : 'Select country'}</Text>
							<Text style={{ color: '#666' }}>{open ? '▴' : '▾'}</Text>
						</TouchableOpacity>

						{open && (
							<>
								{loading ? (
									<View style={{ padding: 20, alignItems: 'center' }}>
										<ActivityIndicator />
									</View>
								) : (
									<FlatList
										data={filtered}
										keyExtractor={item => item.code}
										renderItem={renderItem}
										style={{ maxHeight: 300, borderRadius: 8, borderWidth: 1, borderColor: '#eee' }}
										contentContainerStyle={{ paddingBottom: 8 }}
									/>
								)}
								{error ? (
									<View style={{ marginTop: 8 }}>
										<Text style={{ color: 'red' }}>{'Failed to load countries from remote; using local list.'}</Text>
										<TouchableOpacity onPress={async () => {
											setError(null);
											setLoading(true);
											try {
												const { data, error: fetchErr } = await supabase.from('countries').select('code,name').order('name', { ascending: true });
												if (fetchErr) throw fetchErr;
												if (Array.isArray(data) && data.length > 0) {
													setCountriesList(data.map(d => ({ code: (d.code||'').toUpperCase(), name: d.name || '' })));
													setError(null);
												}
											} catch (e) {
												console.warn('Retry failed:', e && e.message ? e.message : e);
												setError(e && e.message ? e.message : String(e));
											} finally {
												setLoading(false);
											}
										}} style={{ marginTop: 8, padding: 8, backgroundColor: '#eee', alignSelf: 'flex-start', borderRadius: 6 }}>
											<Text>{'Retry'}</Text>
										</TouchableOpacity>
									</View>
								) : null}
							</>
						)}

				<View style={{ paddingVertical: 12 }}>
					<TouchableOpacity
						style={{ alignItems: 'center', backgroundColor: '#2551A1', borderRadius: 100, paddingVertical: 14 }}
						onPress={handleNext}
					>
						<Text style={{ color: '#FFFFFF', fontSize: 14 }}>{'Next'}</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};