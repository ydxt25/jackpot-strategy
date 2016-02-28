(function() {
window["JST"] = window["JST"] || {};

window["JST"]["widgets/default/default.tpl.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="jqs" id="jqs-example">\n    <ul class="jqs-steps">\n        <li>Registration</li>\n        <li>Set Strategy</li>\n        <li>Set Game</li>\n        <li>Generate</li>\n    </ul>\n    <div class="jqs-content">\n        <div class="jqs-step-content" id="form-step"></div>\n        <div class="jqs-step-content" id="strategy-step"></div>\n        <div class="jqs-step-content" id="games-step"></div>\n        <div class="jqs-step-content" id="generator-step"></div>\n    </div>\n</div>';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["widgets/game/game.tpl.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="jqs" id="jqs-example">\n    <ul class="jqs-steps">\n        <li>Registration</li>\n        <li>Set Strategy</li>\n        <li>Generate</li>\n    </ul>\n    <div class="jqs-content">\n        <div class="jqs-step-content" id="form-step"></div>\n        <div class="jqs-step-content" id="strategy-step"></div>\n        <div class="jqs-step-content" id="generator-step"></div>\n    </div>\n</div>';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["views/form/templates/default.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="widget-form-container container-fluid">\r\n	<h3 class="step-header"><strong>STEP 1</strong> - Create an Account</h3>\r\n	<form action="" class="widget-form">\r\n		<div class="input-group">\r\n			<div class="cg-xs-12">\r\n				<h3 class="form-error hidden"></h3>\r\n			</div>\r\n		</div>\r\n		<div class="input-group">\r\n			<div class="cg-sm-6 cg-xs-12">\r\n				<label for="first_name">First Name</label>\r\n				<input type="text" name="first_name" class="input-control" placeholder="First Name" id="first_name"/>\r\n			</div>\r\n			<div class="cg-sm-6 cg-xs-12">\r\n				<label for="first_name">Last Name</label>\r\n				<input type="text" name="last_name" class="input-control" placeholder="Last Name"/>\r\n			</div>\r\n		</div>\r\n		<div class="input-group">\r\n			<div class="cg-sm-6 cg-xs-12">\r\n				<label for="first_name">Email</label>\r\n				<input type="text" name="email" class="input-control" placeholder="Email"/>\r\n			</div>\r\n			<div class="cg-sm-6 cg-xs-12">\r\n				<label for="first_name">Password</label>\r\n				<input type="text" name="password" class="input-control" placeholder="Password"/>\r\n			</div>\r\n		</div>\r\n		<div class="input-group">\r\n			<div class="cg-sm-6 cg-xs-12">\r\n				<label for="country">Country</label>\r\n				<select name="country" id="country" class="input-control">\r\n\r\n				</select>\r\n			</div>\r\n			<div class="cg-sm-6 cg-xs-12">\r\n				<label for="first_name">Phone</label>\r\n				<input type="text" name="phone" class="input-control"/>\r\n			</div>\r\n		</div>\r\n		<div class="input-group form-buttons">\r\n			<div class="cg-sm-6 cg-sm-offset-3 col-xs-12">\r\n				<button type="submit" class="btn-custom1 wide">\r\n					Sign up Now\r\n					<span class="step-arrow">\r\n						<img src="http://cdn.jackpotsstrategy.com/widget/images/arrow-big.png" alt=""/>\r\n					</span>\r\n				</button>\r\n				<!--<hr/>-->\r\n				<!--<div class="login-text text-center">Already registered? <a href="">Login Here</a></div>-->\r\n			</div>\r\n		</div>\r\n		<div class="input-group form-loading hidden">\r\n			<div class="cg-xs-12">\r\n				<div class="loading-text text-center"><strong>Please Wait</strong> our system is picking the best lottery provider for you</div>\r\n				<div class="spinner">\r\n					<div class="bounce1"></div>\r\n					<div class="bounce2"></div>\r\n					<div class="bounce3"></div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["views/generator/templates/default.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="widget-generator container-fluid text">\r\n	<h3>Step 4 - <span>Generate & Checkout</span></h3>\r\n	<div class="row">\r\n		<div class="cg-xs-12">\r\n			<div id="draws"></div>\r\n		</div>\r\n		<div class="cg-xs-12 text-center">\r\n			<div class="generating">\r\n				<div class="loading-text text-center"><strong>Please Wait</strong> while our algorithm is generating numbers</div>\r\n				<div class="spinner">\r\n					<div class="bounce1"></div>\r\n					<div class="bounce2"></div>\r\n					<div class="bounce3"></div>\r\n				</div>\r\n			</div>\r\n			<div class="generated hidden">\r\n				<p class="generated-text">\r\n					Your numbers has generated! checkout now with your lottery provider\r\n				</p>\r\n				<a href="" class="btn btn-custom1 checkout-now generate-btn">Checkout</a>\r\n			</div>\r\n			<div class="input-group checkout-loading hidden">\r\n				<div class="cg-xs-12">\r\n					<div class="loading-text text-center"><strong>Please Wait</strong> Numbers is being added to your cart!</div>\r\n					<div class="spinner">\r\n						<div class="bounce1"></div>\r\n						<div class="bounce2"></div>\r\n						<div class="bounce3"></div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["views/games/templates/default.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="widget-game-container container-fluid">\r\n	<div class="cg-sm-12">\r\n		<h3>STEP 3 - <span>Select Game</span></h3>\r\n	</div>\r\n	<div class="cg-sm-12">\r\n		<div class="owl-carousel owl-theme games-box-container">\r\n			{{ _.each(games, function(game) { }}\r\n			<div class="game-box">\r\n				<img class="clock-image" src="images/clock.png" alt=""/>\r\n				<div class="box-content">\r\n					<div class="time-left game-timer" data-time="{{= game.endDate.getTime() }}"></div>\r\n					<div class="jackpot">{{= game.jackpot }}</div>\r\n					<div class="game-logo">\r\n						<img src="http://cdn.jackpotsstrategy.com/widget/images/{{= game.systemName }}.png" alt=""/>\r\n					</div>\r\n				</div>\r\n				<button type="button" data-game="{{= game.systemName }}" class="select-game-btn btn btn-custom1">Generate</button>\r\n			</div>\r\n			{{ }); }}\r\n		</div>\r\n	</div>\r\n</div>';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["views/strategies/templates/default.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="widget-strategy-selector container-fluid text">\r\n	<h3>STEP 2 - <span>Choose Your Strategy</span></h3>\r\n	<div class="owl-carousel owl-theme strategy-box-container">\r\n		<div class="strategy-box">\r\n			<div class="row">\r\n				<div class="cg-md-6  cg-xs-12">\r\n					<h3 class="strategy-title text-center">Lotto Analytic</h3>\r\n					<p>\r\n						Lotto Analysis is smart strategy that checks for recent numbers that havnt been won yet or numbers that has low frenquensy of winning and will likly be picked in the next lottery\r\n					</p>\r\n					<strong>\r\n						Note: You dont need to understand extactly how the strategy works, we have calculated for you the recommended settings\r\n					</strong>\r\n				</div>\r\n				<div class="cg-md-6  cg-xs-12">\r\n					<h3 class="strategy-title text-center">Settings</h3>\r\n					<form action="" class="widget-form">\r\n						<div class="input-group">\r\n							<div class="cg-xs-12">\r\n								<label for="analytic-depth">Analyses Depth</label>\r\n								<select name="draws-count" id="analytic-depth" class="input-control">\r\n									<option value="3">1 Month</option>\r\n									<option value="3" selected="selected">3 Months - Recommended</option>\r\n									<option value="5">6 Months</option>\r\n								</select>\r\n							</div>\r\n						</div>\r\n						<div class="input-group">\r\n							<div class="cg-xs-12">\r\n								<label for="analytic-depth">Max Analyzed Lotteries</label>\r\n								<select name="draws-count" id="max-analyzed" class="input-control">\r\n									<option value="3">1,000</option>\r\n									<option value="3" selected="selected">3,000 - Recommended</option>\r\n									<option value="5">5,000</option>\r\n								</select>\r\n							</div>\r\n						</div>\r\n						<div class="input-group form-buttons">\r\n							<div class="cg-xs-12">\r\n								<button type="button" class="btn btn-custom1 choose-strategy-btn wide" data-strategy="lotto-analytic">Choose Strategy</button>\r\n							</div>\r\n						</div>\r\n					</form>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="strategy-box">\r\n			<div class="row">\r\n				<div class="cg-md-6  cg-xs-12">\r\n					<h3 class="strategy-title text-center">Wheeling System</h3>\r\n					<p>\r\n						Wheeling System is smart strategy that uses most common numbers that has won the jackpot including\r\n						an special algoritem which calculate numbers with the best chance of wining in the next lottery\r\n						it uses the lottery date and has special settings to maxmimize chance\r\n					</p>\r\n					<strong>\r\n						Note: You dont need to understand exactly how the strategy works, we have calculated for you the recommended settings\r\n					</strong>\r\n				</div>\r\n				<div class="cg-md-6  cg-xs-12">\r\n					<h3 class="strategy-title text-center">Settings</h3>\r\n					<form action="" class="widget-form">\r\n						<div class="input-group">\r\n							<div class="cg-xs-12">\r\n								<label for="analytic-depth">Depth</label>\r\n								<select name="draws-count" id="analytic-depth" class="input-control">\r\n									<option value="3">1 Month</option>\r\n									<option value="3" selected="selected">3 Months - Recommended</option>\r\n									<option value="5">6 Months</option>\r\n								</select>\r\n							</div>\r\n						</div>\r\n						<div class="input-group">\r\n							<div class="cg-xs-12">\r\n								<label for="analytic-depth">Common Percentage</label>\r\n								<select name="draws-count" id="max-analyzed" class="input-control">\r\n									<option value="3">40%</option>\r\n									<option value="3" selected="selected">60% - Recommended</option>\r\n									<option value="5">80%</option>\r\n								</select>\r\n							</div>\r\n						</div>\r\n						<div class="input-group form-buttons">\r\n							<div class="cg-xs-12">\r\n								<button type="button" class="btn btn-custom1 choose-strategy-btn wide" data-strategy="wheeling-system">Choose Strategy</button>\r\n							</div>\r\n						</div>\r\n					</form>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="strategy-box">\r\n			<div class="row">\r\n				<div class="cg-md-6  cg-xs-12">\r\n					<h3 class="strategy-title text-center">Birthday</h3>\r\n					<p>\r\n						Birthday strategy is all about luck,\r\n						making picking random personal dates includes our picking algorithm creates your own personal lucky numbers\r\n					</p>\r\n					<strong>\r\n						Note: Your own birthday will also be used to send you gifts in your birthday !\r\n					</strong>\r\n				</div>\r\n				<div class="cg-md-6  cg-xs-12">\r\n					<h3 class="strategy-title text-center">Settings</h3>\r\n					<form action="" class="widget-form">\r\n						<div class="input-group">\r\n							<div class="cg-xs-12">\r\n								<label for="years">Your Birthday</label>\r\n								<div class="row">\r\n									<div class="cg-xs-4">\r\n										<select name="years" id="years" class="input-control">\r\n											<option>Year</option>\r\n										</select>\r\n									</div>\r\n									<div class="cg-xs-4">\r\n										<select name="months" id="months" class="input-control">\r\n											<option>Month</option>\r\n										</select>\r\n									</div>\r\n									<div class="cg-xs-4">\r\n										<select name="days" id="days" class="input-control">\r\n											<option>Day</option>\r\n										</select>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n						<div class="input-group">\r\n							<div class="cg-xs-12">\r\n								<label for="years">Personal Date 1</label>\r\n								<div class="row">\r\n									<div class="cg-xs-4">\r\n										<select name="years" id="years" class="input-control">\r\n											<option>Year</option>\r\n										</select>\r\n									</div>\r\n									<div class="cg-xs-4">\r\n										<select name="months" id="months" class="input-control">\r\n											<option>Month</option>\r\n										</select>\r\n									</div>\r\n									<div class="cg-xs-4">\r\n										<select name="days" id="days" class="input-control">\r\n											<option>Day</option>\r\n										</select>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n						<div class="input-group">\r\n							<div class="cg-xs-12">\r\n								<label for="years">Personal Date 2</label>\r\n								<div class="row">\r\n									<div class="cg-xs-4">\r\n										<select name="years" id="years" class="input-control">\r\n											<option>Year</option>\r\n										</select>\r\n									</div>\r\n									<div class="cg-xs-4">\r\n										<select name="months" id="months" class="input-control">\r\n											<option>Month</option>\r\n										</select>\r\n									</div>\r\n									<div class="cg-xs-4">\r\n										<select name="days" id="days" class="input-control">\r\n											<option>Day</option>\r\n										</select>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n						<div class="input-group form-buttons">\r\n							<div class="cg-xs-12">\r\n								<button type="button" class="btn btn-custom1 choose-strategy-btn wide" data-strategy="wheeling-system">Choose Strategy</button>\r\n							</div>\r\n						</div>\r\n					</form>\r\n				</div>\r\n			</div>\r\n		</div>\r\n\r\n	</div>\r\n</div>';

}
return __p
}})();