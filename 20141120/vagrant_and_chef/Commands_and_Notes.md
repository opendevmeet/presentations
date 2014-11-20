# Prepared Steps

- Create Gemfile
```
cat <<EOF > Gemfile
source "https://rubygems.org"
gem 'knife-solo'
gem 'berkshelf'
gem 'librarian-chef'
EOF
```

- Ruby Environment Settings
```
echo '2.1.2' > .ruby-version
echo 'opendevmeetdemo' > .ruby-gemset
```

- Install gems: ```bundler```

# Vagrant

- ```mkdir vagrant && cd vagrant```
- ```vagrant init osx1010```
- file: **Vagrantfile** *[descr. && set gui true]*
- ```vagrant up``` *[time: 8m8s; incl. import and boot]*

# Chef
## prepare
- ```cd ..```
- ```mkdir chef && cd chef```
- ```knife solo init --librarian .```
- descr. <files> ```ls```

## node
- create node: nodes/demo.json
```
{
  "run_list": []
}
```
- (!) Show blank Vagrant machine

## deploy
- first deploy ```knife solo cook vagrant@demo``` *[before cook, prepare machine, ssh settup + vagrant]*

## cookbooks
- How to start? Search Website for existing "cookbooks"
- What do I need on every OS X installation?
  - https://supermarket.getchef.com/cookbooks/
  - homebrew
- Librarian-chef VS. 'git clone'
- Cheffile add: ```cookbook 'homebrew', '~> 1.9.2'```
- Download cookbooks ```librarian update```
- configure 'homebrew' in 'run_list' of 'node' VS. 'role'

## roles
- create role: roles/osx_base.rb
```
name "osx_base"
description "base role for all of my osx systems"
run_list(
  "recipe[homebrew]"
)
```
- this role gets added to the 'run_list' of our node.
- Deploy again. Homebrew gets installed.

## create custom cookbooks

- ```knife cookbook create my_default_applications -z```
- ```mv cookbooks/my_default_applications site-cookbooks/my_default_applications```
- ```cd site-cookbooksmy_default_applications```
- metadata.rb ```depends 'homebrew'``` && ```depends 'dmg'``` && increase version
- file: site-cookbooks/my_default_applications/recipes/vim.rb
```
package 'vim' do
  action :install
end
```
- metadata.rb: ```depends 'dmg'```
- file: site-cookbooks/my_default_applications/recipes/chrome.rb
```
dmg_package 'Google Chrome' do
  dmg_name 'googlechrome'
  source   'https://dl-ssl.google.com/chrome/mac/stable/GGRM/googlechrome.dmg'
  checksum '5cc869c2e8b7e42a61677739411c097664745c5c0d4886832cbbbe6f8b6dadba'
  action   :install
end
```
- update: Cheffile
```
cookbook 'my_default_applications', :path => 'site-cookbooks/my_default_applications'
```
- udpate: nodes/demo.json - 'run_list'
```
"role[osx_base]",
"recipe[my_default_applications::vim]",
"recipe[my_default_applications::chrome]"
```
- librarian update && deploy