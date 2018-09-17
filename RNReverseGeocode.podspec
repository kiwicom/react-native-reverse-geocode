require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "RNReverseGeocode"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = "https://github.com/kiwicom/react-native-reverse-geocode"
  s.license      = "MIT"
  s.author             = { "Kiwi.com" => "https://github.com/kiwicom" }
  s.platform     = :ios, "8.0"
  s.source       = { :git => "https://github.com/kiwicom/react-native-reverse-geocode.git", :tag => "#{s.version}" }

  s.source_files  = "ios/**/*.{h,m}"

  s.dependency "React"
end
  