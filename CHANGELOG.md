### v9.0.8

Grafana Plugin for OpenNMS version 9.0.8 is a re-release of version 9.0.7 which contains a number of bug fixes and enhancements.

* [OPG-369](https://opennms.atlassian.net/browse/OPG-369) React Flow Panel and Datasource improvements
* [OPG-427](https://opennms.atlassian.net/browse/OPG-427) Node metadata not always returned
* [OPG-438](https://opennms.atlassian.net/browse/OPG-438) v9 Dashboard Converter tool is resetting query datasources to default names

### v9.0.7

Grafana Plugin for OpenNMS version 9.0.7 release contains a number of bug fixes and enhancements.

* [OPG-369](https://opennms.atlassian.net/browse/OPG-369) React Flow Panel and Datasource improvements
* [OPG-427](https://opennms.atlassian.net/browse/OPG-427) Node metadata not always returned
* [OPG-438](https://opennms.atlassian.net/browse/OPG-438) v9 Dashboard Converter tool is resetting query datasources to default names

### v9.0.6

Grafana Plugin for OpenNMS version 9.0.6 release contains a number of bug fixes and enhancements.

* [HELM-446](https://opennms.atlassian.net/browse/HELM-446) Stat Panel "Last \*" Calculation doesn't ignore NaN values
* [HELM-445](https://opennms.atlassian.net/browse/HELM-445) upgrade helm to latest grafana 9.x APIs
* [HELM-443](https://opennms.atlassian.net/browse/HELM-443) Site documentation not building
* [HELM-442](https://opennms.atlassian.net/browse/HELM-442) Regression: Unable to manually type in node value in Perf DS
* [HELM-440](https://opennms.atlassian.net/browse/HELM-440) Dashboard converter does not update Entity Alarm queries properly
* [HELM-439](https://opennms.atlassian.net/browse/HELM-439) Filter panel field order does not adapt to panel shape
* [HELM-435](https://opennms.atlassian.net/browse/HELM-435) Entity DS Alarm query doesn't handle multi value variables properly
* [HELM-430](https://opennms.atlassian.net/browse/HELM-430) Perf DS Query doesn't support $\{variable\} syntax
* [HELM-418](https://opennms.atlassian.net/browse/HELM-418) Document that variables must now be defined prior to use in expressions
* [HELM-416](https://opennms.atlassian.net/browse/HELM-416) Docs about Predefined Dashboards are misleading
* [HELM-415](https://opennms.atlassian.net/browse/HELM-415) Docs direct user to create a Custom Action when creating a Dashboard but this feature no longer exists in Grafana v9

### v9.0.5

Grafana Plugin for OpenNMS version 9.0.5 is a small release with a number of small fixes and enhancements.

* [HELM-432](https://opennms.atlassian.net/browse/HELM-432) Create a Converter Dashboard
* [HELM-425](https://opennms.atlassian.net/browse/HELM-425) Fix logic for transient flag
* [HELM-424](https://opennms.atlassian.net/browse/HELM-424) Unable to set node in Perf DS Query
* [HELM-422](https://opennms.atlassian.net/browse/HELM-422) Default flow dashboards need updating for v9 plugin
* [HELM-417](https://opennms.atlassian.net/browse/HELM-417) Resource field hard-coding node ID
* [HELM-414](https://opennms.atlassian.net/browse/HELM-414) Converted dashboards that use expressions fail because attribute labels are misplaced after conversion
* [HELM-400](https://opennms.atlassian.net/browse/HELM-400) Alarm Table details does not show Alarm ID
* [HELM-396](https://opennms.atlassian.net/browse/HELM-396) Alarm Table - allow right-click anywhere in panel
* [HELM-389](https://opennms.atlassian.net/browse/HELM-389) Filter Panel: Tie to Dashboard

### v9.0.4

Grafana Plugin for OpenNMS version 9.0.4 is a small release with one bugfix.

* [HELM-421](https://opennms.atlassian.net/browse/HELM-421): PerfDS: Explorer for string property gives error "N.replace is not a function"

### v9.0.3

Grafana Plugin for OpenNMS version 9.0.3 is a small release with one final breaking ID change based on Grafana's registry guidelines.

It contains a number of dependency security updates, as well as a few small bugfixes:

* [HELM-398](https://opennms.atlassian.net/browse/HELM-398): Alarm Table / Entity Datasource: Enable "Use Grafana User"
* [HELM-406](https://opennms.atlassian.net/browse/HELM-406): Adding a perf filter query to a dashboard elicits "TypeError: l is undefined"
* [HELM-411](https://opennms.atlassian.net/browse/HELM-411): Alarm datasource query not keeping proper equality

### v9.0.2

Grafana Plugin for OpenNMS version 9.0.2 is a bugfix release.

### v9.0.1

Grafana Plugin for OpenNMS version 9.0.1 is a re-release of 9.0.0, with a change to the plugin ID used for publication to Grafana's registry and updated logo.

### v9.0.0

Grafana Plugin for OpenNMS version 9 is a large refactor of the codebase from Helm 8.

Highlights include:
* rewrite all panels in React
* clean up a bunch of code under the covers to use newer Grafana datastructures
* lots of documentation updates and improvements
* and much, much more!

A **Dashboard Convert Panel** has been provided to migrate your dashboards from Helm 8.
Instructions on backing up your existing dashboards and upgrading can be found in [the Grafana plugin documentation](https://docs.opennms.com/grafana-plugin/latest/installation/upgrading.html).
