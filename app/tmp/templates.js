(function() {
window["JST"] = window["JST"] || {};

window["JST"]["widgets/default/default.tpl.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="jqs" id="jqs-example">\r\n    <ul class="jqs-steps">\r\n        <li>{{= trans(\'Registration\') }}</li>\r\n        <li>{{= trans(\'Set Strategy\') }}</li>\r\n        <li>{{= trans(\'Set Game\') }}</li>\r\n        <li>{{= trans(\'Generate\') }}</li>\r\n    </ul>\r\n    <div class="jqs-content">\r\n        <div class="jqs-step-content" id="form-step"></div>\r\n        <div class="jqs-step-content" id="strategy-step"></div>\r\n        <div class="jqs-step-content" id="games-step"></div>\r\n        <div class="jqs-step-content" id="generator-step"></div>\r\n    </div>\r\n</div>';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["widgets/form/form.tpl.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="jqs" id="jqs-example">\r\n    <ul class="jqs-steps hidden">\r\n        <li>{{= trans(\'Registration\') }}</li>\r\n        <li>{{= trans(\'Start Play\') }}</li>\r\n    </ul>\r\n    <div class="jqs-content">\r\n        <div class="jqs-step-content" id="form-step"></div>\r\n        <div class="jqs-step-content" id="redirect-step"></div>\r\n    </div>\r\n</div>\r\n';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["widgets/game/game.tpl.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="jqs" id="jqs-example">\r\n    <ul class="jqs-steps">\r\n        <li>Registration</li>\r\n        <li>Set Strategy</li>\r\n        <li>Generate</li>\r\n    </ul>\r\n    <div class="jqs-content">\r\n        <div class="jqs-step-content" id="form-step"></div>\r\n        <div class="jqs-step-content" id="strategy-step"></div>\r\n        <div class="jqs-step-content" id="generator-step"></div>\r\n    </div>\r\n</div>';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["views/form/templates/1column.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="widget-form-container container-fluid form-1column">\r\n	<form action="" class="widget-form">\r\n		<div class="input-group">\r\n			<div class="cg-xs-12">\r\n				<h3 class="form-error hidden"></h3>\r\n			</div>\r\n		</div>\r\n		<div class="input-group">\r\n			<div class="cg-sm-6 cg-xs-12">\r\n				<label for="first_name">{{= trans(\'First Name\') }}</label>\r\n				<input type="text" name="first_name" class="input-control" placeholder="{{= trans(\'First Name\') }}" id="first_name"/>\r\n			</div>\r\n			<div class="cg-sm-6 cg-xs-12">\r\n				<label for="first_name">{{= trans(\'Last Name\') }}</label>\r\n				<input type="text" name="last_name" class="input-control" placeholder="{{= trans(\'Last Name\') }}"/>\r\n			</div>\r\n		</div>\r\n		<div class="input-group">\r\n			<div class="cg-sm-12 cg-xs-12">\r\n				<label for="first_name">{{= trans(\'Email\') }}</label>\r\n				<input type="text" name="email" class="input-control" placeholder="{{= trans(\'Email\') }}"/>\r\n			</div>\r\n		</div>\r\n		<div class="input-group input-password">\r\n			<div class="cg-sm-12 cg-xs-12">\r\n				<label for="first_name">{{= trans(\'Password\') }}</label>\r\n				<input type="password" name="password" class="input-control" placeholder="{{= trans(\'Password\') }}"/>\r\n			</div>\r\n		</div>\r\n		<div class="input-group">\r\n			<div class="cg-sm-12 cg-xs-12">\r\n				<label for="country">{{= trans(\'Country\') }}</label>\r\n				<select name="country" id="country" class="input-control">\r\n\r\n				</select>\r\n			</div>\r\n		</div>\r\n		<div class="input-group">\r\n			<div class="cg-sm-12 cg-xs-12">\r\n				<label for="first_name">{{= trans(\'Phone\') }}</label>\r\n				<input type="text" name="phone" class="input-control" placeholder="{{= trans(\'Phone\') }}"/>\r\n			</div>\r\n		</div>\r\n		<div class="input-group form-buttons">\r\n			<div class="cg-sm-12 col-xs-12 text-center">\r\n				<button type="submit" class="btn-custom1">\r\n					{{= trans(\'Sign up Now\') }}\r\n					<span class="step-arrow">\r\n						<img src="http://cdn.jackpotsstrategy.com/widget/images/arrow-big.png" alt=""/>\r\n					</span>\r\n				</button>\r\n			</div>\r\n		</div>\r\n		<div class="input-group form-loading hidden">\r\n			<div class="cg-xs-12">\r\n				<div class="loading-text text-center"><strong>{{= trans(\'Please Wait\') }}</strong> {{= trans(\'Please wait our system is picking the best lottery provider for you\') }}</div>\r\n				<div class="spinner">\r\n					<div class="bounce1"></div>\r\n					<div class="bounce2"></div>\r\n					<div class="bounce3"></div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["views/form/templates/default.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="widget-form-container container-fluid">\r\n	<h3 class="step-header"><strong>{{= trans(\'STEP 1\') }}</strong> - {{= trans(\'Create an Account\') }}</h3>\r\n	<form action="" class="widget-form">\r\n		<div class="input-group">\r\n			<div class="cg-xs-12">\r\n				<h3 class="form-error hidden"></h3>\r\n			</div>\r\n		</div>\r\n		<div class="input-group">\r\n			<div class="cg-sm-6 cg-xs-12">\r\n				<label for="first_name">{{= trans(\'First Name\') }}</label>\r\n				<input type="text" name="first_name" class="input-control" placeholder="{{= trans(\'First Name\') }}" id="first_name"/>\r\n			</div>\r\n			<div class="cg-sm-6 cg-xs-12">\r\n				<label for="first_name">{{= trans(\'Last Name\') }}</label>\r\n				<input type="text" name="last_name" class="input-control" placeholder="{{= trans(\'Last Name\') }}"/>\r\n			</div>\r\n		</div>\r\n		<div class="input-group">\r\n			<div class="cg-sm-6 cg-xs-12">\r\n				<label for="first_name">{{= trans(\'Email\') }}</label>\r\n				<input type="text" name="email" class="input-control" placeholder="{{= trans(\'Email\') }}"/>\r\n			</div>\r\n			<div class="cg-sm-6 cg-xs-12 input-password">\r\n				<label for="first_name">{{= trans(\'Password\') }}</label>\r\n				<input type="password" name="password" class="input-control" placeholder="{{= trans(\'Password\') }}"/>\r\n			</div>\r\n		</div>\r\n		<div class="input-group">\r\n			<div class="cg-sm-6 cg-xs-12">\r\n				<label for="country">{{= trans(\'Country\') }}</label>\r\n				<select name="country" id="country" class="input-control">\r\n\r\n				</select>\r\n			</div>\r\n			<div class="cg-sm-6 cg-xs-12">\r\n				<label for="first_name">{{= trans(\'Phone\') }}</label>\r\n				<input type="text" name="phone" class="input-control" placeholder="{{= trans(\'Phone\') }}"/>\r\n			</div>\r\n		</div>\r\n		<div class="input-group form-buttons">\r\n			<div class="cg-sm-6 cg-sm-offset-3 col-xs-12 text-center">\r\n				<button type="submit" class="btn-custom1 wide">\r\n					{{= trans(\'Sign up Now\') }}\r\n					<span class="step-arrow">\r\n						<img src="http://cdn.jackpotsstrategy.com/widget/images/arrow-big.png" alt=""/>\r\n					</span>\r\n				</button>\r\n				<hr/>\r\n				<div class="login-text text-center">{{= trans(\'Already registered?\') }} <a href="" class="show-login">{{= trans(\'Login Here\') }}</a></div>\r\n			</div>\r\n		</div>\r\n		<div class="input-group form-loading hidden">\r\n			<div class="cg-xs-12">\r\n				<div class="loading-text text-center"><strong>{{= trans(\'Please Wait\') }}</strong> {{= trans(\'our system is picking the best lottery provider for you\') }}</div>\r\n				<div class="spinner">\r\n					<div class="bounce1"></div>\r\n					<div class="bounce2"></div>\r\n					<div class="bounce3"></div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["views/games/templates/default.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="widget-game-container container-fluid">\r\n	<h3 class="step-header">{{= trans(\'STEP 3\') }} - <span>{{= trans(\'Select Game\') }}</span></h3>\r\n	<div class="step-body">\r\n		<div class="owl-carousel owl-theme games-box-container">\r\n			{{ _.each(games, function(generatorGame) { }}\r\n			{{ var game = generator.getGame(generatorGame.system_name) }}\r\n			<div class="game-box">\r\n				<img class="clock-image" src="http://cdn.jackpotsstrategy.com/widget/images/clock.png" alt=""/>\r\n				<div class="box-content">\r\n					<div class="time-left game-timer" data-time="{{= game.endDate.getTime() }}"></div>\r\n					<div class="jackpot">{{= game.jackpot }}</div>\r\n					<div class="game-logo">\r\n						<img src="http://cdn.jackpotsstrategy.com/widget/images/{{= game.systemName }}.png" alt=""/>\r\n					</div>\r\n				</div>\r\n				<button type="button" data-game="{{= game.systemName }}" class="select-game-btn btn btn-custom1">{{= trans(\'Generate\') }}</button>\r\n			</div>\r\n			{{ }); }}\r\n		</div>\r\n	</div>\r\n</div>';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["views/generator/templates/default.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="widget-generator container-fluid text">\r\n	<h3 class="step-header">{{= trans(\'STEP 4\') }} - <span>{{= trans(\'Generate & Checkout\') }}</span></h3>\r\n	<div class="step-body">\r\n		<div class="row">\r\n			<div class="cg-xs-12">\r\n				<div id="draws"></div>\r\n			</div>\r\n			<div class="cg-xs-12 text-center">\r\n				<div class="generating">\r\n					<div class="loading-text text-center"><strong>{{= trans(\'Please Wait\') }}</strong> {{= trans(\'While our algorithm is generating numbers\') }}</div>\r\n					<div class="spinner">\r\n						<div class="bounce1"></div>\r\n						<div class="bounce2"></div>\r\n						<div class="bounce3"></div>\r\n					</div>\r\n				</div>\r\n				<div class="checkout-loading hidden animated bounceIn">\r\n					<div class="loading-text text-center"><strong>{{= trans(\'Please Wait\') }}</strong> {{= trans(\'Numbers is being added to your cart\') }}</div>\r\n					<div class="spinner">\r\n						<div class="bounce1"></div>\r\n						<div class="bounce2"></div>\r\n						<div class="bounce3"></div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["views/login/templates/default.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="widget-login-container container-fluid">\r\n    <h3 class="step-header"><strong>{{= trans(\'STEP 1\') }}</strong> - {{= trans(\'Sign In\') }}</h3>\r\n    <form action="" class="widget-form">\r\n        <div class="input-group">\r\n            <div class="cg-xs-12">\r\n                <h3 class="form-error hidden"></h3>\r\n            </div>\r\n        </div>\r\n        <div class="input-group">\r\n            <div class="cg-xs-12 cg-sm-offset-3 cg-sm-6">\r\n                <label for="email" class="sr-only">{{= trans(\'Email\') }}</label>\r\n                <input type="text" id="email" name="email" class="input-control" placeholder="{{= trans(\'Email\') }}"/>\r\n            </div>\r\n            <div class="cg-xs-12 cg-sm-offset-3 cg-sm-6">\r\n                <label for="password" class="sr-only">{{= trans(\'Password\') }}</label>\r\n                <input type="password" name="password" id="password" class="input-control"\r\n                       placeholder="{{= trans(\'Password\') }}"/>\r\n            </div>\r\n        </div>\r\n        <div class="input-group form-buttons">\r\n            <div class="cg-sm-6 cg-sm-offset-3 col-xs-12 text-center">\r\n                <button type="submit" class="btn-custom1 wide">\r\n                    {{= trans(\'Sign In\') }}\r\n					<span class="step-arrow">\r\n						<img src="http://cdn.jackpotsstrategy.com/widget/images/arrow-big.png" alt=""/>\r\n					</span>\r\n                </button>\r\n                <hr/>\r\n                <div class="register-text text-center">{{= trans(\'New Customer?\') }} <a class="show-form" href="">\r\n                    {{= trans(\'Register Here\') }}</a></div>\r\n            </div>\r\n        </div>\r\n        <div class="input-group form-loading hidden">\r\n            <div class="cg-xs-12">\r\n                <div class="loading-text text-center">\r\n                    <strong>{{= trans(\'Please Wait\') }}</strong>\r\n                    {{= trans(\'your being logged in..\') }}\r\n                </div>\r\n                <div class="spinner">\r\n                    <div class="bounce1"></div>\r\n                    <div class="bounce2"></div>\r\n                    <div class="bounce3"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["views/redirect/templates/1column.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="widget-redirect container-fluid text">\r\n	<div class="checkout-loading animated bounceIn">\r\n		<div class="loading-text text-center"><strong>{{= trans(\'Please Wait\') }}</strong>\r\n			<br/>\r\n			{{= trans(\'Your now being redirected to your lotto provider\') }}</div>\r\n		<div class="spinner">\r\n			<div class="bounce1"></div>\r\n			<div class="bounce2"></div>\r\n			<div class="bounce3"></div>\r\n		</div>\r\n	</div>\r\n</div>\r\n';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["views/redirect/templates/default.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="widget-redirect container-fluid text">\r\n	<h3 class="step-header">{{= trans(\'Step 4\') }} - <span>{{= trans(\'Start Play\') }}</span></h3>\r\n	<div class="checkout-loading animated bounceIn">\r\n		<div class="loading-text text-center"><strong>{{= trans(\'Please Wait\') }}</strong>\r\n			<br/>\r\n			{{= trans(\'Your now being redirected to your lotto provider\') }}</div>\r\n		<div class="spinner">\r\n			<div class="bounce1"></div>\r\n			<div class="bounce2"></div>\r\n			<div class="bounce3"></div>\r\n		</div>\r\n	</div>\r\n</div>\r\n';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["views/strategies/templates/default.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="widget-strategy-selector container-fluid text">\r\n	<h3 class="step-header">{{= trans("STEP 2") }} - <span>{{= trans("Choose Your Strategy") }}</span></h3>\r\n	<div class="step-body">\r\n		<div class="owl-carousel owl-theme strategy-box-container">\r\n			<div class="strategy-box">\r\n				<div class="row">\r\n					<div class="cg-md-6  cg-xs-12">\r\n						<h3 class="strategy-title text-center">{{= trans("Lotto Analytic") }}</h3>\r\n						<p>\r\n							{{= trans("Lotto Analysis is smart strategy that checks for recent numbers that havent been won yet or numbers that has low frequency of winning and will likely be picked in the next lottery") }}\r\n						</p>\r\n						<strong>\r\n							{{= trans("Note: You dont need to understand exactly how the strategy works, we have calculated for you the recommended settings") }}\r\n						</strong>\r\n					</div>\r\n					<div class="cg-md-6  cg-xs-12">\r\n						<h3 class="strategy-title text-center">{{= trans("Settings") }}</h3>\r\n						<form action="" class="widget-form">\r\n							<div class="input-group">\r\n								<div class="cg-xs-12">\r\n									<label for="analytic-depth">{{= trans("Analyses Depth") }}</label>\r\n									<select name="draws-count" id="analytic-depth" class="input-control">\r\n										<option value="3">{{= trans("1 Month") }}</option>\r\n										<option value="3" selected="selected">{{= trans("3 Months - Recommended") }}</option>\r\n										<option value="5">{{= trans("6 Months") }}</option>\r\n									</select>\r\n								</div>\r\n							</div>\r\n							<div class="input-group">\r\n								<div class="cg-xs-12">\r\n									<label for="analytic-depth">{{= trans("Max Analyzed Lotteries") }}</label>\r\n									<select name="draws-count" id="max-analyzed" class="input-control">\r\n										<option value="3">{{= trans("1,000") }}</option>\r\n										<option value="3" selected="selected">{{= trans("3,000 - Recommended") }}</option>\r\n										<option value="5">{{= trans("5,000") }}</option>\r\n									</select>\r\n								</div>\r\n							</div>\r\n							<div class="input-group form-buttons">\r\n								<div class="cg-xs-12">\r\n									<button type="button" class="btn btn-custom1 choose-strategy-btn wide" data-strategy="lotto-analytic">{{= trans("Choose Strategy") }}</button>\r\n								</div>\r\n							</div>\r\n						</form>\r\n					</div>\r\n				</div>\r\n			</div>\r\n			<div class="strategy-box">\r\n				<div class="row">\r\n					<div class="cg-md-6  cg-xs-12">\r\n						<h3 class="strategy-title text-center">{{= trans("Wheeling System") }}</h3>\r\n						<p>\r\n							{{= trans("Wheeling System is smart strategy that uses most common numbers that has won the jackpot including an special algorithm which calculate numbers with the best chance of wining in the next lottery it uses the lottery date and has special settings to maximize chance") }}\r\n						</p>\r\n						<strong>\r\n							{{= trans("Note: You dont need to understand exactly how the strategy works, we have calculated for you the recommended settings") }}\r\n						</strong>\r\n					</div>\r\n					<div class="cg-md-6  cg-xs-12">\r\n						<h3 class="strategy-title text-center">{{= trans("Settings") }}</h3>\r\n						<form action="" class="widget-form">\r\n							<div class="input-group">\r\n								<div class="cg-xs-12">\r\n									<label for="analytic-depth">{{= trans("Depth") }}</label>\r\n									<select name="draws-count" id="analytic-depth" class="input-control">\r\n										<option value="3">{{= trans("1 Month") }}</option>\r\n										<option value="3" selected="selected">{{= trans("3 Months - Recommended") }}</option>\r\n										<option value="5">{{= trans("6 Months") }}</option>\r\n									</select>\r\n								</div>\r\n							</div>\r\n							<div class="input-group">\r\n								<div class="cg-xs-12">\r\n									<label for="analytic-depth">{{= trans("Common Percentage") }}</label>\r\n									<select name="draws-count" id="max-analyzed" class="input-control">\r\n										<option value="3">{{= trans("40%") }}</option>\r\n										<option value="3" selected="selected">{{= trans("60% - Recommended") }}</option>\r\n										<option value="5">{{= trans("80%") }}</option>\r\n									</select>\r\n								</div>\r\n							</div>\r\n							<div class="input-group form-buttons">\r\n								<div class="cg-xs-12">\r\n									<button type="button" class="btn btn-custom1 choose-strategy-btn wide" data-strategy="wheeling-system">{{= trans("Choose Strategy") }}</button>\r\n								</div>\r\n							</div>\r\n						</form>\r\n					</div>\r\n				</div>\r\n			</div>\r\n			<div class="strategy-box">\r\n				<div class="row">\r\n					<div class="cg-md-6  cg-xs-12">\r\n						<h3 class="strategy-title text-center">{{= trans("Birthday") }}</h3>\r\n						<p>\r\n							{{= trans("Birthday strategy is all about luck, making picking random personal dates includes our picking algorithm creates your own personal lucky numbers") }}\r\n						</p>\r\n						<strong>\r\n							{{= trans("Note: Your own birthday will also be used to send you gifts in your birthday!") }}\r\n						</strong>\r\n					</div>\r\n					<div class="cg-md-6  cg-xs-12">\r\n						<h3 class="strategy-title text-center">{{= trans("Settings") }}</h3>\r\n						<form action="" class="widget-form">\r\n							<div class="input-group">\r\n								<div class="cg-xs-12">\r\n									<label for="years">{{= trans("Your Birthday") }}</label>\r\n									<div class="row">\r\n										<div class="cg-xs-4">\r\n											<select name="years" id="years" class="input-control">\r\n												<option>{{= trans("Year") }}</option>\r\n											</select>\r\n										</div>\r\n										<div class="cg-xs-4">\r\n											<select name="months" id="months" class="input-control">\r\n												<option>{{= trans("Month") }}</option>\r\n											</select>\r\n										</div>\r\n										<div class="cg-xs-4">\r\n											<select name="days" id="days" class="input-control">\r\n												<option>{{= trans("Day") }}</option>\r\n											</select>\r\n										</div>\r\n									</div>\r\n								</div>\r\n							</div>\r\n							<div class="input-group">\r\n								<div class="cg-xs-12">\r\n									<label for="years">{{= trans("Personal Date 1") }}</label>\r\n									<div class="row">\r\n										<div class="cg-xs-4">\r\n											<select name="years" id="years" class="input-control">\r\n												<option>{{= trans("Year") }}</option>\r\n											</select>\r\n										</div>\r\n										<div class="cg-xs-4">\r\n											<select name="months" id="months" class="input-control">\r\n												<option>{{= trans("Month") }}</option>\r\n											</select>\r\n										</div>\r\n										<div class="cg-xs-4">\r\n											<select name="days" id="days" class="input-control">\r\n												<option>{{= trans("Day") }}</option>\r\n											</select>\r\n										</div>\r\n									</div>\r\n								</div>\r\n							</div>\r\n							<div class="input-group">\r\n								<div class="cg-xs-12">\r\n									<label for="years">{{= trans("Personal Date 2") }}</label>\r\n									<div class="row">\r\n										<div class="cg-xs-4">\r\n											<select name="years" id="years" class="input-control">\r\n												<option>{{= trans("Year") }}</option>\r\n											</select>\r\n										</div>\r\n										<div class="cg-xs-4">\r\n											<select name="months" id="months" class="input-control">\r\n												<option>{{= trans("Month") }}</option>\r\n											</select>\r\n										</div>\r\n										<div class="cg-xs-4">\r\n											<select name="days" id="days" class="input-control">\r\n												<option>{{= trans("Day") }}</option>\r\n											</select>\r\n										</div>\r\n									</div>\r\n								</div>\r\n							</div>\r\n							<div class="input-group form-buttons">\r\n								<div class="cg-xs-12">\r\n									<button type="button" class="btn btn-custom1 choose-strategy-btn wide" data-strategy="wheeling-system">{{= trans("Choose Strategy") }}</button>\r\n								</div>\r\n							</div>\r\n						</form>\r\n					</div>\r\n				</div>\r\n			</div>\r\n\r\n		</div>\r\n	</div>\r\n</div>';

}
return __p
}})();