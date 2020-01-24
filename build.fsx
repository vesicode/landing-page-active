#r "paket:
nuget Fake.IO.FileSystem
nuget Fake.Core.Target //"
#load "./.fake/build.fsx/intellisense.fsx"

open Fake.Core
open Fake.IO

let removableDirs = [
  "./_next"
  "./about"
  "./service"
  "./contact"
  "./css"
  "./fonts"
  "./home"
  "./img"
  "./news"
  "./panels"
  "./privacy-policy"
  "./products"
  "./service"
  "./technology"
]

Target.create "Clean" (fun _ ->
  Shell.rm "./404.html"
  Shell.rm "./index.html"
  Shell.deleteDirs removableDirs)

Target.create "Default" (fun _ ->
  Trace.trace "Cleaning out the old")

open Fake.Core.TargetOperators

"Clean"
  ==> "Default"

Target.runOrDefault "Default"