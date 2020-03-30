
declare class Builder extends NSObject {

	static alloc(): Builder; // inherited from NSObject

	static new(): Builder; // inherited from NSObject

	buildAndReturnError(): ONFaceStepVariantConfig;

	withPhotoCaptureWithConfig(config: PhotoStepConfiguration): Builder;

	withVideoCaptureWithConfig(config: VideoStepConfiguration): Builder;
}

declare class DocumentConfigBuilder extends NSObject {

	static alloc(): DocumentConfigBuilder; // inherited from NSObject

	static new(): DocumentConfigBuilder; // inherited from NSObject

	buildAndReturnError(): ONDocumentTypeVariantConfig;

	withDrivingLicence(): DocumentConfigBuilder;

	withGenericWithConfig(config: GenericDocumentConfiguration): DocumentConfigBuilder;

	withNationalIdentityCard(): DocumentConfigBuilder;

	withPassport(): DocumentConfigBuilder;

	withResidencePermit(): DocumentConfigBuilder;

	withVisa(): DocumentConfigBuilder;

	withWorkPermit(): DocumentConfigBuilder;
}

declare class GenericDocumentConfiguration extends NSObject {

	static alloc(): GenericDocumentConfiguration; // inherited from NSObject

	static new(): GenericDocumentConfiguration; // inherited from NSObject
}

declare class GlareDetection extends NSObject {

	static alloc(): GlareDetection; // inherited from NSObject

	static new(): GlareDetection; // inherited from NSObject

	detect(image: UIImage): boolean;
}

declare class ONAddressResult extends NSObject {

	static alloc(): ONAddressResult; // inherited from NSObject

	static new(): ONAddressResult; // inherited from NSObject

	readonly buildingName: string;

	readonly buildingNumber: string;

	readonly country: string;

	readonly endDate: Date;

	readonly flatNumber: string;

	readonly postcode: string;

	readonly startDate: Date;

	readonly state: string;

	readonly street: string;

	readonly subStreet: string;

	readonly town: string;
}

declare class ONAppearance extends NSObject {

	static alloc(): ONAppearance; // inherited from NSObject

	static new(): ONAppearance; // inherited from NSObject

	constructor(o: { primaryColor: UIColor; primaryTitleColor: UIColor; primaryBackgroundPressedColor: UIColor; secondaryBackgroundPressedColor: UIColor; fontRegular: string; fontBold: string; supportDarkMode: boolean; });

	constructor(o: { primaryColor: UIColor; primaryTitleColor: UIColor; primaryBackgroundPressedColor: UIColor; secondaryBackgroundPressedColor: UIColor; supportDarkMode: boolean; });

	constructor(o: { primaryColor: UIColor; primaryTitleColor: UIColor; primaryBackgroundPressedColor: UIColor; supportDarkMode: boolean; });

	constructor(o: { supportDarkMode: boolean; });

	initWithPrimaryColorPrimaryTitleColorPrimaryBackgroundPressedColorSecondaryBackgroundPressedColorFontRegularFontBoldSupportDarkMode(primaryColor: UIColor, primaryTitleColor: UIColor, primaryBackgroundPressedColor: UIColor, secondaryBackgroundPressedColor: UIColor, fontRegular: string, fontBold: string, supportDarkMode: boolean): this;

	initWithPrimaryColorPrimaryTitleColorPrimaryBackgroundPressedColorSecondaryBackgroundPressedColorSupportDarkMode(primaryColor: UIColor, primaryTitleColor: UIColor, primaryBackgroundPressedColor: UIColor, secondaryBackgroundPressedColor: UIColor, supportDarkMode: boolean): this;

	initWithPrimaryColorPrimaryTitleColorPrimaryBackgroundPressedColorSupportDarkMode(primaryColor: UIColor, primaryTitleColor: UIColor, primaryBackgroundPressedColor: UIColor, supportDarkMode: boolean): this;

	initWithSupportDarkMode(supportDarkMode: boolean): this;
}

declare class ONApplicant extends NSObject {

	static alloc(): ONApplicant; // inherited from NSObject

	static new(): ONApplicant; // inherited from NSObject

	static newWithFirstNameLastName(firstName: string, lastName: string): ONApplicant;
}

declare class ONApplicantResult extends NSObject {

	static alloc(): ONApplicantResult; // inherited from NSObject

	static new(): ONApplicantResult; // inherited from NSObject

	readonly addresses: NSArray<ONAddressResult>;

	readonly country: string;

	readonly createdAt: Date;

	readonly dob: Date;

	readonly email: string;

	readonly firstName: string;

	readonly gender: string;

	readonly href: string;

	readonly id: string;

	readonly idNumbers: NSArray<ONIdNumberResult>;

	readonly lastName: string;

	readonly middleName: string;

	readonly mobile: string;

	readonly telephone: string;

	readonly title: string;
}

declare class ONDocumentResult extends NSObject {

	static alloc(): ONDocumentResult; // inherited from NSObject

	static new(): ONDocumentResult; // inherited from NSObject

	readonly createdAt: Date;

	readonly fileName: string;

	readonly fileSize: number;

	readonly fileType: string;

	readonly href: string;

	readonly id: string;

	readonly side: string;

	readonly type: string;
}

declare class ONDocumentTypeVariantConfig extends NSObject {

	static alloc(): ONDocumentTypeVariantConfig; // inherited from NSObject

	static builder(): DocumentConfigBuilder;

	static new(): ONDocumentTypeVariantConfig; // inherited from NSObject
}

declare class ONFaceResult extends NSObject {

	static alloc(): ONFaceResult; // inherited from NSObject

	static new(): ONFaceResult; // inherited from NSObject

	readonly createdAt: Date;

	readonly fileName: string;

	readonly fileSize: number;

	readonly fileType: string;

	readonly href: string;

	readonly id: string;
}

declare class ONFaceStepVariantConfig extends NSObject {

	static alloc(): ONFaceStepVariantConfig; // inherited from NSObject

	static builder(): Builder;

	static new(): ONFaceStepVariantConfig; // inherited from NSObject
}

declare class ONFlow extends NSObject {

	static alloc(): ONFlow; // inherited from NSObject

	static new(): ONFlow; // inherited from NSObject

	constructor(o: { flowConfiguration: ONFlowConfig; });

	initWithFlowConfiguration(flowConfiguration: ONFlowConfig): this;

	runAndReturnError(): UIViewController;

	withResponseHandler(responseHandler: (p1: ONFlowResponse) => void): ONFlow;

	withResponseHandlerDismissFlowOnCompletion(responseHandler: (p1: ONFlowResponse) => void, dismissFlowOnCompletion: boolean): ONFlow;
}

declare class ONFlowConfig extends NSObject {

	static alloc(): ONFlowConfig; // inherited from NSObject

	static builder(): ONFlowConfigBuilder;

	static new(): ONFlowConfig; // inherited from NSObject
}

declare class ONFlowConfigBuilder extends NSObject {

	static alloc(): ONFlowConfigBuilder; // inherited from NSObject

	static new(): ONFlowConfigBuilder; // inherited from NSObject

	buildAndReturnError(): ONFlowConfig;

	withAppearance(appearance: ONAppearance): void;

	withApplicant(applicant: ONApplicant): void;

	withApplicantId(applicantId: string): void;

	withCustomLocalization(): void;

	withCustomLocalizationWithTableName(tableName: string): void;

	withCustomLocalizationWithTableNameIn(tableName: string, bundle: NSBundle): void;

	withDocumentStep(): void;

	withDocumentStepOfTypeAndCountryCode(variant: ONDocumentTypeVariantConfig, countryCode: string): void;

	withFaceStepOfVariant(variant: ONFaceStepVariantConfig): void;

	withSdkToken(sdkToken: string): void;

	withSdkTokenExpireHandler(sdkToken: string, expireHandler: (p1: (p1: string) => void) => void): void;

	withToken(token: string): void;

	withWelcomeStep(): void;
}

declare const enum ONFlowConfigError {

	MissingToken = 0,

	MissingSteps = 1,

	MissingApplicant = 2,

	MultipleApplicants = 3,

	MutlipleTokenTypes = 4,

	ApplicantProvidedWithSDKToken = 5
}

declare const enum ONFlowError {

	CameraPermission = 0,

	MicrophonePermission = 1,

	Upload = 2,

	Exception = 3,

	FailedToWriteToDisk = 4
}

declare class ONFlowResponse extends NSObject {

	static alloc(): ONFlowResponse; // inherited from NSObject

	static new(): ONFlowResponse; // inherited from NSObject

	error: NSError;

	results: NSArray<ONFlowResult>;

	userCanceled: boolean;
}

declare class ONFlowResult extends NSObject {

	static alloc(): ONFlowResult; // inherited from NSObject

	static new(): ONFlowResult; // inherited from NSObject

	result: any;

	readonly type: ONFlowResultType;
}

declare const enum ONFlowResultType {

	Document = 0,

	Face = 1,

	Applicant = 2
}

declare class ONIdNumberResult extends NSObject {

	static alloc(): ONIdNumberResult; // inherited from NSObject

	static new(): ONIdNumberResult; // inherited from NSObject

	readonly stateCode: string;

	readonly type: string;

	readonly value: string;
}

declare class OnfidoBlurDetection extends NSObject {

	static alloc(): OnfidoBlurDetection; // inherited from NSObject

	static new(): OnfidoBlurDetection; // inherited from NSObject

	detect(image: UIImage): boolean;
}

declare function OnfidoGenerateUUIDString(): string;

declare function OnfidoIso8601FormattedString(date: Date): string;

declare class OnfidoMBBackgroundView extends UIView {

	static alloc(): OnfidoMBBackgroundView; // inherited from NSObject

	static appearance(): OnfidoMBBackgroundView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): OnfidoMBBackgroundView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): OnfidoMBBackgroundView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): OnfidoMBBackgroundView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): OnfidoMBBackgroundView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): OnfidoMBBackgroundView; // inherited from UIAppearance

	static new(): OnfidoMBBackgroundView; // inherited from NSObject

	blurEffectStyle: UIBlurEffectStyle;

	color: UIColor;

	style: OnfidoMBProgressHUDBackgroundStyle;
}

declare class OnfidoMBBarProgressView extends UIView {

	static alloc(): OnfidoMBBarProgressView; // inherited from NSObject

	static appearance(): OnfidoMBBarProgressView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): OnfidoMBBarProgressView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): OnfidoMBBarProgressView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): OnfidoMBBarProgressView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): OnfidoMBBarProgressView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): OnfidoMBBarProgressView; // inherited from UIAppearance

	static new(): OnfidoMBBarProgressView; // inherited from NSObject

	lineColor: UIColor;

	progress: number;

	progressColor: UIColor;

	progressRemainingColor: UIColor;
}

declare class OnfidoMBProgressHUD extends UIView {

	static HUDForView(view: UIView): OnfidoMBProgressHUD;

	static alloc(): OnfidoMBProgressHUD; // inherited from NSObject

	static appearance(): OnfidoMBProgressHUD; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): OnfidoMBProgressHUD; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): OnfidoMBProgressHUD; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): OnfidoMBProgressHUD; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): OnfidoMBProgressHUD; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): OnfidoMBProgressHUD; // inherited from UIAppearance

	static hideHUDForViewAnimated(view: UIView, animated: boolean): boolean;

	static new(): OnfidoMBProgressHUD; // inherited from NSObject

	static showHUDAddedToAnimated(view: UIView, animated: boolean): OnfidoMBProgressHUD;

	animationType: OnfidoMBProgressHUDAnimation;

	readonly backgroundView: OnfidoMBBackgroundView;

	readonly bezelView: OnfidoMBBackgroundView;

	completionBlock: () => void;

	contentColor: UIColor;

	customView: UIView;

	defaultMotionEffectsEnabled: boolean;

	delegate: OnfidoMBProgressHUDDelegate;

	readonly detailsLabel: UILabel;

	graceTime: number;

	readonly label: UILabel;

	margin: number;

	minShowTime: number;

	minSize: CGSize;

	mode: OnfidoMBProgressHUDMode;

	offset: CGPoint;

	progress: number;

	progressObject: NSProgress;

	removeFromSuperViewOnHide: boolean;

	square: boolean;

	constructor(o: { view: UIView; });

	hideAnimated(animated: boolean): void;

	hideAnimatedAfterDelay(animated: boolean, delay: number): void;

	initWithView(view: UIView): this;

	showAnimated(animated: boolean): void;
}

declare const enum OnfidoMBProgressHUDAnimation {

	Fade = 0,

	Zoom = 1,

	ZoomOut = 2,

	ZoomIn = 3
}

declare const enum OnfidoMBProgressHUDBackgroundStyle {

	SolidColor = 0,

	Blur = 1
}

interface OnfidoMBProgressHUDDelegate extends NSObjectProtocol {

	hudWasHidden?(hud: OnfidoMBProgressHUD): void;
}
declare var OnfidoMBProgressHUDDelegate: {

	prototype: OnfidoMBProgressHUDDelegate;
};

declare const enum OnfidoMBProgressHUDMode {

	Indeterminate = 0,

	Determinate = 1,

	DeterminateHorizontalBar = 2,

	AnnularDeterminate = 3,

	CustomView = 4,

	Text = 5
}

declare var OnfidoMBProgressMaxOffset: number;

declare class OnfidoMBRoundProgressView extends UIView {

	static alloc(): OnfidoMBRoundProgressView; // inherited from NSObject

	static appearance(): OnfidoMBRoundProgressView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): OnfidoMBRoundProgressView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): OnfidoMBRoundProgressView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): OnfidoMBRoundProgressView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): OnfidoMBRoundProgressView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): OnfidoMBRoundProgressView; // inherited from UIAppearance

	static new(): OnfidoMBRoundProgressView; // inherited from NSObject

	annular: boolean;

	backgroundTintColor: UIColor;

	progress: number;

	progressTintColor: UIColor;
}

declare class OnfidoSEGAES256Crypto extends NSObject implements OnfidoSEGCrypto {

	static alloc(): OnfidoSEGAES256Crypto; // inherited from NSObject

	static new(): OnfidoSEGAES256Crypto; // inherited from NSObject

	static randomDataOfLength(length: number): NSData;

	readonly iv: NSData;

	readonly password: string;

	readonly salt: NSData;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { password: string; });

	constructor(o: { password: string; salt: NSData; iv: NSData; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	decrypt(data: NSData): NSData;

	encrypt(data: NSData): NSData;

	initWithPassword(password: string): this;

	initWithPasswordSaltIv(password: string, salt: NSData, iv: NSData): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class OnfidoSEGAliasPayload extends OnfidoSEGPayload {

	static alloc(): OnfidoSEGAliasPayload; // inherited from NSObject

	static new(): OnfidoSEGAliasPayload; // inherited from NSObject

	readonly theNewId: string;

	constructor(o: { newId: string; context: NSDictionary<string, any>; integrations: NSDictionary<string, any>; });

	initWithNewIdContextIntegrations(newId: string, context: NSDictionary<string, any>, integrations: NSDictionary<string, any>): this;
}

declare class OnfidoSEGAnalytics extends NSObject {

	static alloc(): OnfidoSEGAnalytics; // inherited from NSObject

	static debug(showDebugLogs: boolean): void;

	static new(): OnfidoSEGAnalytics; // inherited from NSObject

	static setupWithConfiguration(configuration: OnfidoSEGAnalyticsConfiguration): void;

	static sharedAnalytics(): OnfidoSEGAnalytics;

	readonly configuration: OnfidoSEGAnalyticsConfiguration;

	constructor(o: { configuration: OnfidoSEGAnalyticsConfiguration; });

	alias(newId: string): void;

	aliasOptions(newId: string, options: NSDictionary<string, any>): void;

	bundledIntegrations(): NSDictionary<any, any>;

	continueUserActivity(activity: NSUserActivity): void;

	disable(): void;

	enable(): void;

	failedToRegisterForRemoteNotificationsWithError(error: NSError): void;

	flush(): void;

	getAnonymousId(): string;

	group(groupId: string): void;

	groupTraits(groupId: string, traits: NSDictionary<string, any>): void;

	groupTraitsOptions(groupId: string, traits: NSDictionary<string, any>, options: NSDictionary<string, any>): void;

	handleActionWithIdentifierForRemoteNotification(identifier: string, userInfo: NSDictionary<any, any>): void;

	identify(userId: string): void;

	identifyTraits(userId: string, traits: NSDictionary<string, any>): void;

	identifyTraitsOptions(userId: string, traits: NSDictionary<string, any>, options: NSDictionary<string, any>): void;

	initWithConfiguration(configuration: OnfidoSEGAnalyticsConfiguration): this;

	openURLOptions(url: NSURL, options: NSDictionary<any, any>): void;

	receivedRemoteNotification(userInfo: NSDictionary<any, any>): void;

	registeredForRemoteNotificationsWithDeviceToken(deviceToken: NSData): void;

	reset(): void;

	screen(screenTitle: string): void;

	screenProperties(screenTitle: string, properties: NSDictionary<string, any>): void;

	screenPropertiesOptions(screenTitle: string, properties: NSDictionary<string, any>, options: NSDictionary<string, any>): void;

	track(event: string): void;

	trackProperties(event: string, properties: NSDictionary<string, any>): void;

	trackPropertiesOptions(event: string, properties: NSDictionary<string, any>, options: NSDictionary<string, any>): void;
}

declare class OnfidoSEGAnalyticsConfiguration extends NSObject {

	static alloc(): OnfidoSEGAnalyticsConfiguration; // inherited from NSObject

	static configurationWithWriteKey(writeKey: string): OnfidoSEGAnalyticsConfiguration;

	static new(): OnfidoSEGAnalyticsConfiguration; // inherited from NSObject

	application: OnfidoSEGApplicationProtocol;

	crypto: OnfidoSEGCrypto;

	enableAdvertisingTracking: boolean;

	flushAt: number;

	launchOptions: NSDictionary<any, any>;

	middlewares: NSArray<OnfidoSEGMiddleware>;

	recordScreenViews: boolean;

	requestFactory: (p1: NSURL) => NSMutableURLRequest;

	shouldUseBluetooth: boolean;

	shouldUseLocationServices: boolean;

	trackApplicationLifecycleEvents: boolean;

	trackAttributionData: boolean;

	trackDeepLinks: boolean;

	trackInAppPurchases: boolean;

	trackPushNotifications: boolean;

	readonly writeKey: string;

	use(factory: OnfidoSEGIntegrationFactory): void;
}

declare var OnfidoSEGAnalyticsIntegrationDidStart: string;

declare class OnfidoSEGApplicationLifecyclePayload extends OnfidoSEGPayload {

	static alloc(): OnfidoSEGApplicationLifecyclePayload; // inherited from NSObject

	static new(): OnfidoSEGApplicationLifecyclePayload; // inherited from NSObject

	launchOptions: NSDictionary<any, any>;

	notificationName: string;
}

interface OnfidoSEGApplicationProtocol extends NSObjectProtocol {

	delegate: UIApplicationDelegate;

	onfido_seg_beginBackgroundTaskWithNameExpirationHandler(taskName: string, handler: () => void): number;

	onfido_seg_endBackgroundTask(identifier: number): void;
}
declare var OnfidoSEGApplicationProtocol: {

	prototype: OnfidoSEGApplicationProtocol;
};

declare class OnfidoSEGBlockMiddleware extends NSObject implements OnfidoSEGMiddleware {

	static alloc(): OnfidoSEGBlockMiddleware; // inherited from NSObject

	static new(): OnfidoSEGBlockMiddleware; // inherited from NSObject

	readonly block: (p1: OnfidoSEGContext, p2: (p1: OnfidoSEGContext) => void) => void;

	constructor(o: { block: (p1: OnfidoSEGContext, p2: (p1: OnfidoSEGContext) => void) => void; });

	contextNext(context: OnfidoSEGContext, next: (p1: OnfidoSEGContext) => void): void;

	initWithBlock(block: (p1: OnfidoSEGContext, p2: (p1: OnfidoSEGContext) => void) => void): this;
}

declare function OnfidoSEGCoerceDictionary(dict: NSDictionary<any, any>): NSDictionary<string, any>;

declare class OnfidoSEGContext extends NSObject implements NSCopying {

	static alloc(): OnfidoSEGContext; // inherited from NSObject

	static new(): OnfidoSEGContext; // inherited from NSObject

	readonly _analytics: OnfidoSEGAnalytics;

	readonly anonymousId: string;

	readonly debug: boolean;

	readonly error: NSError;

	readonly eventType: OnfidoSEGEventType;

	readonly payload: OnfidoSEGPayload;

	readonly userId: string;

	constructor(o: { analytics: OnfidoSEGAnalytics; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithAnalytics(analytics: OnfidoSEGAnalytics): this;

	modify(modify: (p1: OnfidoSEGMutableContext) => void): OnfidoSEGContext;
}

declare class OnfidoSEGContinueUserActivityPayload extends OnfidoSEGPayload {

	static alloc(): OnfidoSEGContinueUserActivityPayload; // inherited from NSObject

	static new(): OnfidoSEGContinueUserActivityPayload; // inherited from NSObject

	activity: NSUserActivity;
}

interface OnfidoSEGCrypto extends NSObjectProtocol {

	decrypt(data: NSData): NSData;

	encrypt(data: NSData): NSData;
}
declare var OnfidoSEGCrypto: {

	prototype: OnfidoSEGCrypto;
};

declare function OnfidoSEGEventNameForScreenTitle(title: string): string;

declare const enum OnfidoSEGEventType {

	Undefined = 0,

	Identify = 1,

	Track = 2,

	Screen = 3,

	Group = 4,

	Alias = 5,

	Reset = 6,

	Flush = 7,

	ReceivedRemoteNotification = 8,

	FailedToRegisterForRemoteNotifications = 9,

	RegisteredForRemoteNotifications = 10,

	HandleActionWithForRemoteNotification = 11,

	ApplicationLifecycle = 12,

	ContinueUserActivity = 13,

	OpenURL = 14
}

declare class OnfidoSEGFileStorage extends NSObject implements OnfidoSEGStorage {

	static alloc(): OnfidoSEGFileStorage; // inherited from NSObject

	static applicationSupportDirectoryURL(): NSURL;

	static new(): OnfidoSEGFileStorage; // inherited from NSObject

	crypto: OnfidoSEGCrypto; // inherited from OnfidoSEGStorage

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { folder: NSURL; crypto: OnfidoSEGCrypto; });

	arrayForKey(key: string): NSArray<any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dataForKey(key: string): NSData;

	dictionaryForKey(key: string): NSDictionary<any, any>;

	initWithFolderCrypto(folderURL: NSURL, crypto: OnfidoSEGCrypto): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeKey(key: string): void;

	resetAll(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setArrayForKey(array: NSArray<any> | any[], key: string): void;

	setDataForKey(data: NSData, key: string): void;

	setDictionaryForKey(dictionary: NSDictionary<any, any>, key: string): void;

	setStringForKey(string: string, key: string): void;

	stringForKey(key: string): string;

	urlForKey(key: string): NSURL;
}

declare class OnfidoSEGGroupPayload extends OnfidoSEGPayload {

	static alloc(): OnfidoSEGGroupPayload; // inherited from NSObject

	static new(): OnfidoSEGGroupPayload; // inherited from NSObject

	readonly groupId: string;

	readonly traits: NSDictionary<string, any>;

	constructor(o: { groupId: string; traits: NSDictionary<string, any>; context: NSDictionary<string, any>; integrations: NSDictionary<string, any>; });

	initWithGroupIdTraitsContextIntegrations(groupId: string, traits: NSDictionary<string, any>, context: NSDictionary<string, any>, integrations: NSDictionary<string, any>): this;
}

declare class OnfidoSEGGzipData extends NSObject {

	static alloc(): OnfidoSEGGzipData; // inherited from NSObject

	static new(): OnfidoSEGGzipData; // inherited from NSObject

	static seg_gzippedData(data: NSData): NSData;
}

declare class OnfidoSEGHTTPClient extends NSObject {

	static alloc(): OnfidoSEGHTTPClient; // inherited from NSObject

	static authorizationHeader(writeKey: string): string;

	static defaultRequestFactory(): (p1: NSURL) => NSMutableURLRequest;

	static new(): OnfidoSEGHTTPClient; // inherited from NSObject

	readonly genericSession: NSURLSession;

	requestFactory: (p1: NSURL) => NSMutableURLRequest;

	readonly sessionsByWriteKey: NSMutableDictionary<string, NSURLSession>;

	constructor(o: { requestFactory: (p1: NSURL) => NSMutableURLRequest; });

	attributionWithWriteKeyForDeviceCompletionHandler(writeKey: string, context: NSDictionary<string, any>, completionHandler: (p1: boolean, p2: NSDictionary<string, any>) => void): NSURLSessionDataTask;

	initWithRequestFactory(requestFactory: (p1: NSURL) => NSMutableURLRequest): this;

	settingsForWriteKeyCompletionHandler(writeKey: string, completionHandler: (p1: boolean, p2: NSDictionary<string, any>) => void): NSURLSessionDataTask;

	uploadForWriteKeyCompletionHandler(batch: NSDictionary<string, any>, writeKey: string, completionHandler: (p1: boolean) => void): NSURLSessionUploadTask;
}

declare function OnfidoSEGIDFA(): string;

declare class OnfidoSEGIdentifyPayload extends OnfidoSEGPayload {

	static alloc(): OnfidoSEGIdentifyPayload; // inherited from NSObject

	static new(): OnfidoSEGIdentifyPayload; // inherited from NSObject

	readonly anonymousId: string;

	readonly traits: NSDictionary<string, any>;

	readonly userId: string;

	constructor(o: { userId: string; anonymousId: string; traits: NSDictionary<string, any>; context: NSDictionary<string, any>; integrations: NSDictionary<string, any>; });

	initWithUserIdAnonymousIdTraitsContextIntegrations(userId: string, anonymousId: string, traits: NSDictionary<string, any>, context: NSDictionary<string, any>, integrations: NSDictionary<string, any>): this;
}

interface OnfidoSEGIntegration extends NSObjectProtocol {

	alias?(payload: OnfidoSEGAliasPayload): void;

	applicationDidBecomeActive?(): void;

	applicationDidEnterBackground?(): void;

	applicationDidFinishLaunching?(notification: NSNotification): void;

	applicationWillEnterForeground?(): void;

	applicationWillResignActive?(): void;

	applicationWillTerminate?(): void;

	continueUserActivity?(activity: NSUserActivity): void;

	failedToRegisterForRemoteNotificationsWithError?(error: NSError): void;

	flush?(): void;

	group?(payload: OnfidoSEGGroupPayload): void;

	handleActionWithIdentifierForRemoteNotification?(identifier: string, userInfo: NSDictionary<any, any>): void;

	identify?(payload: OnfidoSEGIdentifyPayload): void;

	openURLOptions?(url: NSURL, options: NSDictionary<any, any>): void;

	receivedRemoteNotification?(userInfo: NSDictionary<any, any>): void;

	registeredForRemoteNotificationsWithDeviceToken?(deviceToken: NSData): void;

	reset?(): void;

	screen?(payload: OnfidoSEGScreenPayload): void;

	track?(payload: OnfidoSEGTrackPayload): void;
}
declare var OnfidoSEGIntegration: {

	prototype: OnfidoSEGIntegration;
};

interface OnfidoSEGIntegrationFactory {

	createWithSettingsForAnalytics(settings: NSDictionary<any, any>, analytics: OnfidoSEGAnalytics): OnfidoSEGIntegration;

	key(): string;
}
declare var OnfidoSEGIntegrationFactory: {

	prototype: OnfidoSEGIntegrationFactory;
};

declare class OnfidoSEGIntegrationsManager extends NSObject implements OnfidoSEGMiddleware {

	static alloc(): OnfidoSEGIntegrationsManager; // inherited from NSObject

	static isTrackEventEnabledForIntegrationInPlan(event: string, key: string, plan: NSDictionary<any, any>): boolean;

	static new(): OnfidoSEGIntegrationsManager; // inherited from NSObject

	readonly registeredIntegrations: NSMutableDictionary<any, any>;

	constructor(o: { analytics: OnfidoSEGAnalytics; });

	contextNext(context: OnfidoSEGContext, next: (p1: OnfidoSEGContext) => void): void;

	getAnonymousId(): string;

	initWithAnalytics(analytics: OnfidoSEGAnalytics): this;
}

interface OnfidoSEGMiddleware {

	contextNext(context: OnfidoSEGContext, next: (p1: OnfidoSEGContext) => void): void;
}
declare var OnfidoSEGMiddleware: {

	prototype: OnfidoSEGMiddleware;
};

declare class OnfidoSEGMiddlewareRunner extends NSObject {

	static alloc(): OnfidoSEGMiddlewareRunner; // inherited from NSObject

	static new(): OnfidoSEGMiddlewareRunner; // inherited from NSObject

	readonly middlewares: NSArray<OnfidoSEGMiddleware>;

	constructor(o: { middlewares: NSArray<OnfidoSEGMiddleware> | OnfidoSEGMiddleware[]; });

	initWithMiddlewares(middlewares: NSArray<OnfidoSEGMiddleware> | OnfidoSEGMiddleware[]): this;

	runCallback(context: OnfidoSEGContext, callback: (p1: boolean, p2: NSArray<OnfidoSEGMiddleware>) => void): void;
}

interface OnfidoSEGMutableContext extends NSObjectProtocol {

	anonymousId: string;

	debug: boolean;

	error: NSError;

	eventType: OnfidoSEGEventType;

	payload: OnfidoSEGPayload;

	userId: string;
}
declare var OnfidoSEGMutableContext: {

	prototype: OnfidoSEGMutableContext;
};

declare const enum OnfidoSEGNetworkStatus {

	NotReachable = 0,

	ReachableViaWiFi = 2,

	ReachableViaWWAN = 1
}

declare class OnfidoSEGOpenURLPayload extends OnfidoSEGPayload {

	static alloc(): OnfidoSEGOpenURLPayload; // inherited from NSObject

	static new(): OnfidoSEGOpenURLPayload; // inherited from NSObject

	options: NSDictionary<any, any>;

	url: NSURL;
}

declare class OnfidoSEGPayload extends NSObject {

	static alloc(): OnfidoSEGPayload; // inherited from NSObject

	static new(): OnfidoSEGPayload; // inherited from NSObject

	readonly context: NSDictionary<string, any>;

	readonly integrations: NSDictionary<string, any>;

	constructor(o: { context: NSDictionary<string, any>; integrations: NSDictionary<string, any>; });

	initWithContextIntegrations(context: NSDictionary<string, any>, integrations: NSDictionary<string, any>): this;
}

declare class OnfidoSEGReachability extends NSObject {

	static alloc(): OnfidoSEGReachability; // inherited from NSObject

	static new(): OnfidoSEGReachability; // inherited from NSObject

	static reachabilityForInternetConnection(): OnfidoSEGReachability;

	static reachabilityForLocalWiFi(): OnfidoSEGReachability;

	static reachabilityWithHostname(hostname: string): OnfidoSEGReachability;

	reachableBlock: (p1: OnfidoSEGReachability) => void;

	reachableOnWWAN: boolean;

	unreachableBlock: (p1: OnfidoSEGReachability) => void;

	constructor(o: { reachabilityRef: any; });

	connectionRequired(): boolean;

	currentReachabilityFlags(): string;

	currentReachabilityStatus(): OnfidoSEGNetworkStatus;

	currentReachabilityString(): string;

	initWithReachabilityRef(ref: any): this;

	isConnectionOnDemand(): boolean;

	isConnectionRequired(): boolean;

	isInterventionRequired(): boolean;

	isReachable(): boolean;

	isReachableViaWWAN(): boolean;

	isReachableViaWiFi(): boolean;

	reachabilityFlags(): SCNetworkReachabilityFlags;

	startNotifier(): boolean;

	stopNotifier(): void;
}

declare class OnfidoSEGRemoteNotificationPayload extends OnfidoSEGPayload {

	static alloc(): OnfidoSEGRemoteNotificationPayload; // inherited from NSObject

	static new(): OnfidoSEGRemoteNotificationPayload; // inherited from NSObject

	actionIdentifier: string;

	deviceToken: NSData;

	error: NSError;

	userInfo: NSDictionary<any, any>;
}

declare class OnfidoSEGScreenPayload extends OnfidoSEGPayload {

	static alloc(): OnfidoSEGScreenPayload; // inherited from NSObject

	static new(): OnfidoSEGScreenPayload; // inherited from NSObject

	readonly category: string;

	readonly name: string;

	readonly properties: NSDictionary<any, any>;

	constructor(o: { name: string; properties: NSDictionary<any, any>; context: NSDictionary<any, any>; integrations: NSDictionary<any, any>; });

	initWithNamePropertiesContextIntegrations(name: string, properties: NSDictionary<any, any>, context: NSDictionary<any, any>, integrations: NSDictionary<any, any>): this;
}

declare var OnfidoSEGSegmentDidSendRequestNotification: string;

declare class OnfidoSEGSegmentIntegration extends NSObject implements OnfidoSEGIntegration {

	static alloc(): OnfidoSEGSegmentIntegration; // inherited from NSObject

	static new(): OnfidoSEGSegmentIntegration; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { analytics: OnfidoSEGAnalytics; httpClient: OnfidoSEGHTTPClient; storage: OnfidoSEGStorage; });

	alias(payload: OnfidoSEGAliasPayload): void;

	applicationDidBecomeActive(): void;

	applicationDidEnterBackground(): void;

	applicationDidFinishLaunching(notification: NSNotification): void;

	applicationWillEnterForeground(): void;

	applicationWillResignActive(): void;

	applicationWillTerminate(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	continueUserActivity(activity: NSUserActivity): void;

	failedToRegisterForRemoteNotificationsWithError(error: NSError): void;

	flush(): void;

	group(payload: OnfidoSEGGroupPayload): void;

	handleActionWithIdentifierForRemoteNotification(identifier: string, userInfo: NSDictionary<any, any>): void;

	identify(payload: OnfidoSEGIdentifyPayload): void;

	initWithAnalyticsHttpClientStorage(analytics: OnfidoSEGAnalytics, httpClient: OnfidoSEGHTTPClient, storage: OnfidoSEGStorage): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	openURLOptions(url: NSURL, options: NSDictionary<any, any>): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	receivedRemoteNotification(userInfo: NSDictionary<any, any>): void;

	registeredForRemoteNotificationsWithDeviceToken(deviceToken: NSData): void;

	reset(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	screen(payload: OnfidoSEGScreenPayload): void;

	self(): this;

	track(payload: OnfidoSEGTrackPayload): void;
}

declare class OnfidoSEGSegmentIntegrationFactory extends NSObject implements OnfidoSEGIntegrationFactory {

	static alloc(): OnfidoSEGSegmentIntegrationFactory; // inherited from NSObject

	static new(): OnfidoSEGSegmentIntegrationFactory; // inherited from NSObject

	client: OnfidoSEGHTTPClient;

	storage: OnfidoSEGStorage;

	constructor(o: { HTTPClient: OnfidoSEGHTTPClient; storage: OnfidoSEGStorage; });

	createWithSettingsForAnalytics(settings: NSDictionary<any, any>, analytics: OnfidoSEGAnalytics): OnfidoSEGIntegration;

	initWithHTTPClientStorage(client: OnfidoSEGHTTPClient, storage: OnfidoSEGStorage): this;

	key(): string;
}

declare var OnfidoSEGSegmentRequestDidFailNotification: string;

declare var OnfidoSEGSegmentRequestDidSucceedNotification: string;

declare function OnfidoSEGSetShowDebugLogs(showDebugLogs: boolean): void;

interface OnfidoSEGStorage extends NSObjectProtocol {

	crypto: OnfidoSEGCrypto;

	arrayForKey(key: string): NSArray<any>;

	dataForKey(key: string): NSData;

	dictionaryForKey(key: string): NSDictionary<any, any>;

	removeKey(key: string): void;

	resetAll(): void;

	setArrayForKey(array: NSArray<any> | any[], key: string): void;

	setDataForKey(data: NSData, key: string): void;

	setDictionaryForKey(dictionary: NSDictionary<any, any>, key: string): void;

	setStringForKey(string: string, key: string): void;

	stringForKey(key: string): string;
}
declare var OnfidoSEGStorage: {

	prototype: OnfidoSEGStorage;
};

declare class OnfidoSEGStoreKitTracker extends NSObject implements SKPaymentTransactionObserver, SKProductsRequestDelegate {

	static alloc(): OnfidoSEGStoreKitTracker; // inherited from NSObject

	static new(): OnfidoSEGStoreKitTracker; // inherited from NSObject

	static trackTransactionsForAnalytics(analytics: OnfidoSEGAnalytics): OnfidoSEGStoreKitTracker;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	paymentQueueDidChangeStorefront(queue: SKPaymentQueue): void;

	paymentQueueRemovedTransactions(queue: SKPaymentQueue, transactions: NSArray<SKPaymentTransaction> | SKPaymentTransaction[]): void;

	paymentQueueRestoreCompletedTransactionsFailedWithError(queue: SKPaymentQueue, error: NSError): void;

	paymentQueueRestoreCompletedTransactionsFinished(queue: SKPaymentQueue): void;

	paymentQueueShouldAddStorePaymentForProduct(queue: SKPaymentQueue, payment: SKPayment, product: SKProduct): boolean;

	paymentQueueUpdatedDownloads(queue: SKPaymentQueue, downloads: NSArray<SKDownload> | SKDownload[]): void;

	paymentQueueUpdatedTransactions(queue: SKPaymentQueue, transactions: NSArray<SKPaymentTransaction> | SKPaymentTransaction[]): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	productsRequestDidReceiveResponse(request: SKProductsRequest, response: SKProductsResponse): void;

	requestDidFailWithError(request: SKRequest, error: NSError): void;

	requestDidFinish(request: SKRequest): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class OnfidoSEGTrackPayload extends OnfidoSEGPayload {

	static alloc(): OnfidoSEGTrackPayload; // inherited from NSObject

	static new(): OnfidoSEGTrackPayload; // inherited from NSObject

	readonly event: string;

	readonly properties: NSDictionary<any, any>;

	constructor(o: { event: string; properties: NSDictionary<any, any>; context: NSDictionary<any, any>; integrations: NSDictionary<any, any>; });

	initWithEventPropertiesContextIntegrations(event: string, properties: NSDictionary<any, any>, context: NSDictionary<any, any>, integrations: NSDictionary<any, any>): this;
}

declare class OnfidoSEGUserDefaultsStorage extends NSObject implements OnfidoSEGStorage {

	static alloc(): OnfidoSEGUserDefaultsStorage; // inherited from NSObject

	static new(): OnfidoSEGUserDefaultsStorage; // inherited from NSObject

	readonly defaults: NSUserDefaults;

	readonly namespacePrefix: string;

	crypto: OnfidoSEGCrypto; // inherited from OnfidoSEGStorage

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { defaults: NSUserDefaults; namespacePrefix: string; crypto: OnfidoSEGCrypto; });

	arrayForKey(key: string): NSArray<any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dataForKey(key: string): NSData;

	dictionaryForKey(key: string): NSDictionary<any, any>;

	initWithDefaultsNamespacePrefixCrypto(defaults: NSUserDefaults, namespacePrefix: string, crypto: OnfidoSEGCrypto): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeKey(key: string): void;

	resetAll(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setArrayForKey(array: NSArray<any> | any[], key: string): void;

	setDataForKey(data: NSData, key: string): void;

	setDictionaryForKey(dictionary: NSDictionary<any, any>, key: string): void;

	setStringForKey(string: string, key: string): void;

	stringForKey(key: string): string;
}

declare class OnfidoSEGUtils extends NSObject {

	static alloc(): OnfidoSEGUtils; // inherited from NSObject

	static dataFromPlist(plist: any): NSData;

	static new(): OnfidoSEGUtils; // inherited from NSObject

	static plistFromData(data: NSData): any;
}

declare function OnfidoTrimQueue(array: NSMutableArray<any>, size: number): void;

declare var OnfidoVersionNumber: number;

declare var OnfidoVersionString: interop.Reference<number>;

declare class PhotoStepConfiguration extends NSObject {

	static alloc(): PhotoStepConfiguration; // inherited from NSObject

	static new(): PhotoStepConfiguration; // inherited from NSObject
}

declare class VideoStepConfiguration extends NSObject {

	static alloc(): VideoStepConfiguration; // inherited from NSObject

	static new(): VideoStepConfiguration; // inherited from NSObject

	constructor(o: { showIntroVideo: boolean; });

	initWithShowIntroVideo(showIntroVideo: boolean): this;
}

declare var kOnfidoSEGReachabilityChangedNotification: string;

declare function onfido_seg_dispatch_is_on_specific_queue(queue: NSObject): boolean;

declare function onfido_seg_dispatch_queue_create_specific(label: string, attr: NSObject): NSObject;

declare function onfido_seg_dispatch_specific(queue: NSObject, block: () => void, waitForCompletion: boolean): void;

declare function onfido_seg_dispatch_specific_async(queue: NSObject, block: () => void): void;

declare function onfido_seg_dispatch_specific_sync(queue: NSObject, block: () => void): void;
