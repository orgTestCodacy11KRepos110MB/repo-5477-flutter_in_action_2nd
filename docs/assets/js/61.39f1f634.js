(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{403:function(a,t,s){a.exports=s.p+"assets/img/13-1.fcda4f48.jpeg"},631:function(a,t,s){"use strict";s.r(t);var e=s(45),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"_13-1-让app支持多语言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-1-让app支持多语言"}},[a._v("#")]),a._v(" 13.1 让App支持多语言")]),a._v(" "),e("h2",{attrs:{id:"_13-1-1-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-1-1-简介"}},[a._v("#")]),a._v(" 13.1.1 简介")]),a._v(" "),e("p",[a._v("如果我们的应用要支持多种语言，那么我们需要“国际化”它。这意味着我们在开发时需要为应用程序支持的每种语言环境设置“本地化”的一些值，如文本和布局。Flutter SDK已经提供了一些组件和类来帮助我们实现国际化，下面我们来介绍一下Flutter中实现国际化的步骤。")]),a._v(" "),e("p",[a._v("接下来我们以"),e("code",[a._v("MaterialApp")]),a._v("类为入口的应用来说明如何支持国际化。")]),a._v(" "),e("blockquote",[e("p",[a._v("大多数应用程序都是通过"),e("code",[a._v("MaterialApp")]),a._v("为入口，但根据低级别的"),e("code",[a._v("WidgetsApp")]),a._v("类为入口编写的应用程序也可以使用相同的类和逻辑进行国际化。"),e("code",[a._v("MaterialApp")]),a._v("实际上也是"),e("code",[a._v("WidgetsApp")]),a._v("的一个包装。")])]),a._v(" "),e("p",[a._v("注意，”本地化的值和资源“是指我们针对不同语言准备的不同资源，这些资源一般是指文案（字符串），当然也会有一些其他的资源会根据不同语言地区而不同，比如我们需要显示一个APP上架地的国旗图片，那么不同Locale区域我们就需要提供不同的的国旗图片。")]),a._v(" "),e("h2",{attrs:{id:"_13-1-2-支持国际化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-1-2-支持国际化"}},[a._v("#")]),a._v(" 13.1.2 支持国际化")]),a._v(" "),e("p",[a._v("默认情况下，Flutter SDK中的组件仅提供美国英语本地化资源（主要是文本）。要添加对其他语言的支持，应用程序须添加一个名为“flutter_localizations”的包依赖，然后还需要在"),e("code",[a._v("MaterialApp")]),a._v("中进行一些配置。 要使用"),e("code",[a._v("flutter_localizations")]),a._v("包，首先需要添加依赖到"),e("code",[a._v("pubspec.yaml")]),a._v("文件中：")]),a._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("dependencies")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("flutter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("sdk")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" flutter\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("flutter_localizations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("sdk")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" flutter\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("接下来，下载"),e("code",[a._v("flutter_localizations")]),a._v("库，然后指定"),e("code",[a._v("MaterialApp")]),a._v("的"),e("code",[a._v("localizationsDelegates")]),a._v("和"),e("code",[a._v("supportedLocales")]),a._v("：")]),a._v(" "),e("div",{staticClass:"language-dart line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'package:flutter_localizations/flutter_localizations.dart'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MaterialApp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n localizationsDelegates"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 本地化的代理类")]),a._v("\n   "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("GlobalMaterialLocalizations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("delegate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n   "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("GlobalWidgetsLocalizations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("delegate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n supportedLocales"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Locale")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'en'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'US'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 美国英语")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Locale")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'zh'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'CN'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 中文简体")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//其它Locales")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ...")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br")])]),e("blockquote",[e("p",[a._v("与"),e("code",[a._v("MaterialApp")]),a._v("类为入口的应用不同, 对基于"),e("code",[a._v("WidgetsApp")]),a._v("类为入口的应用程序进行国际化时,不需要"),e("code",[a._v("GlobalMaterialLocalizations.delegate")]),a._v("。")])]),a._v(" "),e("p",[e("code",[a._v("localizationsDelegates")]),a._v("列表中的元素是生成本地化值集合的工厂。"),e("code",[a._v("GlobalMaterialLocalizations.delegate")]),a._v(" 为Material 组件库提供的本地化的字符串和其他值，它可以使Material 组件支持多语言。 "),e("code",[a._v("GlobalWidgetsLocalizations.delegate")]),a._v("定义组件默认的文本方向，从左到右或从右到左，这是因为有些语言的阅读习惯并不是从左到右，比如如阿拉伯语就是从右向左的。")]),a._v(" "),e("p",[e("code",[a._v("supportedLocales")]),a._v("也接收一个Locale数组，表示我们的应用支持的语言列表，在本例中我们的应用只支持美国英语和中文简体两种语言。")]),a._v(" "),e("h2",{attrs:{id:"_13-1-3-获取当前区域locale"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-1-3-获取当前区域locale"}},[a._v("#")]),a._v(" 13.1.3 获取当前区域Locale")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://docs.flutter.io/flutter/dart-ui/Locale-class.html",target:"_blank",rel:"noopener noreferrer"}},[e("code",[a._v("Locale")]),e("OutboundLink")],1),a._v("类是用来标识用户的语言环境的，它包括语言和国家两个标志如：")]),a._v(" "),e("div",{staticClass:"language-dart line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Locale")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'zh'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'CN'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 中文简体")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("我们始终可以通过以下方式来获取应用的当前区域Locale：")]),a._v(" "),e("div",{staticClass:"language-dart line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Locale")]),a._v(" myLocale "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Localizations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("localeOf")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[e("a",{attrs:{href:"https://docs.flutter.io/flutter/widgets/Localizations-class.html",target:"_blank",rel:"noopener noreferrer"}},[e("code",[a._v("Localizations")]),e("OutboundLink")],1),a._v(" 组件一般位于widget树中其它业务组件的顶部，它的作用是定义区域Locale以及设置子树依赖的本地化资源。 如果系统的语言环境发生变化，"),e("a",{attrs:{href:"https://docs.flutter.io/flutter/widgets/WidgetsApp-class.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("WidgetsApp"),e("OutboundLink")],1),a._v("将创建一个新的Localizations 组件并重建它，这样子树中通过"),e("code",[a._v("Localizations.localeOf(context)")]),a._v(" 获取的Locale就会更新。")]),a._v(" "),e("h2",{attrs:{id:"_13-1-4-监听系统语言切换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-1-4-监听系统语言切换"}},[a._v("#")]),a._v(" 13.1.4 监听系统语言切换")]),a._v(" "),e("p",[a._v("当我们更改系统语言设置时，APP中的Localizations组件会重新构建，"),e("code",[a._v("Localizations.localeOf(context)")]),a._v(" 获取的Locale就会更新，最终界面会重新build达到切换语言的效果。但是这个过程是隐式完成的，我们并没有主动去监听系统语言切换，但是有时我们需要在系统语言发生改变时做一些事，比如系统语言切换为一种我们APP不支持的语言时，我们需要设置一个默认的语言，这时我们就需要监听locale改变事件。")]),a._v(" "),e("p",[a._v("我们可以通过"),e("code",[a._v("localeResolutionCallback")]),a._v("或"),e("code",[a._v("localeListResolutionCallback")]),a._v("回调来监听locale改变的事件，我们先看看"),e("code",[a._v("localeResolutionCallback")]),a._v("的回调函数签名：")]),a._v(" "),e("div",{staticClass:"language-dart line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Locale")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Locale")]),a._v(" locale"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Iterable")]),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Locale")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" supportedLocales"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[e("p",[a._v("参数"),e("code",[a._v("locale")]),a._v("的值为当前的当前的系统语言设置，当应用启动时或用户动态改变系统语言设置时此locale即为系统的当前locale。当开发者手动指定APP的locale时，那么此locale参数代表开发者指定的locale，此时将忽略系统locale如：")]),a._v(" "),e("div",{staticClass:"language-dart line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MaterialApp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n locale"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Locale")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'en'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'US'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//手动指定locale")]),a._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("上面的例子中手动指定了应用locale为美国英语，指定后即使设备当前语言是中文简体，应用中的locale也依然是美国英语。如果"),e("code",[a._v("locale")]),a._v("为"),e("code",[a._v("null")]),a._v("，则表示Flutter未能获取到设备的Locale信息，所以我们在使用"),e("code",[a._v("locale")]),a._v("之前一定要先判空。")])]),a._v(" "),e("li",[e("p",[e("code",[a._v("supportedLocales")]),a._v(" 为当前应用支持的locale列表，是开发者在MaterialApp中通过"),e("code",[a._v("supportedLocales")]),a._v("属性注册的。")])]),a._v(" "),e("li",[e("p",[a._v("返回值是一个"),e("code",[a._v("Locale")]),a._v("，此"),e("code",[a._v("Locale")]),a._v("为Flutter APP最终使用的"),e("code",[a._v("Locale")]),a._v("。通常在不支持的语言区域时返回一个默认的"),e("code",[a._v("Locale")]),a._v("。")])])]),a._v(" "),e("p",[e("code",[a._v("localeListResolutionCallback")]),a._v("和"),e("code",[a._v("localeResolutionCallback")]),a._v("唯一的不同就在第一个参数类型，前者接收的是一个"),e("code",[a._v("Locale")]),a._v("列表，而后者接收的是单个"),e("code",[a._v("Locale")]),a._v("。")]),a._v(" "),e("div",{staticClass:"language-dart line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Locale")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Locale")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" locales"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Iterable")]),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Locale")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" supportedLocales"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("在较新的Android系统中，用户可以设置一个语言列表，这样一来，支持多语言的应用就会得到这个列表，应用通常的处理方式就是按照列表的顺序依次尝试加载相应的Locale，如果某一种语言加载成功则会停止。图13-1是Android系统中设置语言列表的截图：")]),a._v(" "),e("p",[e("img",{attrs:{src:s(403),alt:"设置语言列表"}})]),a._v(" "),e("p",[a._v("在Flutter中，应该优先使用"),e("code",[a._v("localeListResolutionCallback")]),a._v("，当然你不必担心Android系统的差异性，如果在低版本的Android系统中，Flutter会自动处理这种情况，这时Locale列表只会包含一项。")]),a._v(" "),e("h2",{attrs:{id:"_13-1-5-localization-组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-1-5-localization-组件"}},[a._v("#")]),a._v(" 13.1.5 Localization 组件")]),a._v(" "),e("p",[a._v("Localizations组件用于加载和查找应用当前语言下的本地化值或资源。应用程序通过"),e("a",{attrs:{href:"https://docs.flutter.io/flutter/widgets/Localizations/of.html",target:"_blank",rel:"noopener noreferrer"}},[e("code",[a._v("Localizations.of(context,type)")]),e("OutboundLink")],1),a._v("来引用这些对象。 如果设备的Locale区域设置发生更改，则Localizations 组件会自动加载新区域的Locale值，然后重新build使用（依赖）了它们的组件，之所以会这样，是因为"),e("code",[a._v("Localizations")]),a._v("内部使用了"),e("a",{attrs:{href:"https://book.flutterchina.club/chapter7/inherited_widget.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("InheritedWidget"),e("OutboundLink")],1),a._v(" ，我们在介绍该组件时讲过：当子组件的"),e("code",[a._v("build")]),a._v("函数引用了"),e("code",[a._v("InheritedWidget")]),a._v("时，会创建对"),e("code",[a._v("InheritedWidget")]),a._v("的隐式依赖关系。因此，当"),e("code",[a._v("InheritedWidget")]),a._v("发生更改时，即"),e("code",[a._v("Localizations")]),a._v("的Locale设置发生更改时，将重建所有依赖它的子组件。")]),a._v(" "),e("p",[a._v("本地化值由"),e("code",[a._v("Localizations")]),a._v("的 "),e("a",{attrs:{href:"https://docs.flutter.io/flutter/widgets/LocalizationsDelegate-class.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("LocalizationsDelegates"),e("OutboundLink")],1),a._v(" 列表加载 。 "),e("strong",[a._v("每个委托必须定义一个异步load() 方法")]),a._v("，以生成封装了一系列本地化值的对象。通常这些对象为每个本地化值定义一个方法。")]),a._v(" "),e("p",[a._v("在大型应用程序中，不同模块或Package可能会与自己的本地化值捆绑在一起。 这就是为什么要用"),e("code",[a._v("Localizations")]),a._v(" 管理对象表的原因。 要使用由"),e("code",[a._v("LocalizationsDelegate")]),a._v("的"),e("code",[a._v("load")]),a._v("方法之一产生的对象，可以指定一个"),e("code",[a._v("BuildContext")]),a._v("和对象的类型来找到它。例如，Material 组件库的本地化字符串由"),e("a",{attrs:{href:"https://docs.flutter.io/flutter/material/MaterialLocalizations-class.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("MaterialLocalizations"),e("OutboundLink")],1),a._v("类定义，此类的实例由"),e("a",{attrs:{href:"https://docs.flutter.io/flutter/material/MaterialApp-class.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("MaterialApp"),e("OutboundLink")],1),a._v("类提供的"),e("code",[a._v("LocalizationDelegate")]),a._v("创建， 它们可以如下方式获取到：")]),a._v(" "),e("div",{staticClass:"language-dart line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Localizations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("of"),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MaterialLocalizations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MaterialLocalizations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("这个特殊的"),e("code",[a._v("Localizations.of()")]),a._v("表达式会经常使用，所以MaterialLocalizations类提供了一个便捷方法：")]),a._v(" "),e("div",{staticClass:"language-dart line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MaterialLocalizations")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("of")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BuildContext")]),a._v(" context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Localizations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("of"),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MaterialLocalizations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MaterialLocalizations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 可以直接调用便捷方法")]),a._v("\ntooltip"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MaterialLocalizations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("of")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("backButtonTooltip"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("h2",{attrs:{id:"_13-1-6-使用打包好的localizationsdelegates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-1-6-使用打包好的localizationsdelegates"}},[a._v("#")]),a._v(" 13.1.6 使用打包好的LocalizationsDelegates")]),a._v(" "),e("p",[a._v("为了尽可能小而且简单，flutter软件包中仅提供美国英语值的"),e("code",[a._v("MaterialLocalizations")]),a._v("和"),e("code",[a._v("WidgetsLocalizations")]),a._v("接口的实现。 这些实现类分别称为"),e("code",[a._v("DefaultMaterialLocalizations")]),a._v("和"),e("code",[a._v("DefaultWidgetsLocalizations")]),a._v("。flutter_localizations 包包含"),e("code",[a._v("GlobalMaterialLocalizations")]),a._v("和"),e("code",[a._v("GlobalWidgetsLocalizations")]),a._v("的本地化接口的多语言实现， 国际化的应用程序必须按照本节开头说明的那样为这些类指定本地化Delegate。")]),a._v(" "),e("p",[a._v("上述的"),e("code",[a._v("GlobalMaterialLocalizations")]),a._v("和"),e("code",[a._v("GlobalWidgetsLocalizations")]),a._v("只是Material组件库的本地化实现，如果我们要让自己的布局支持多语言，那么就需要实现在即的"),e("code",[a._v("Localizations")]),a._v("，我们将在下一节介绍其具体的实现方式。")])])}),[],!1,null,null,null);t.default=n.exports}}]);