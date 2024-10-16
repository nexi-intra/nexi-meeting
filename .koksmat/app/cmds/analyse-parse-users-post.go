// -------------------------------------------------------------------
// Generated by 365admin-publish
// -------------------------------------------------------------------
/*
---
title: Parse Users
---
*/
package cmds

import (
	"context"
	"os"
	"path"

	"github.com/nexi-intra/nexi-meeting/execution"
	"github.com/nexi-intra/nexi-meeting/utils"
)

func AnalyseParseUsersPost(ctx context.Context, body []byte, args []string) (*string, error) {
	inputErr := os.WriteFile(path.Join(utils.WorkDir("nexi-meeting"), "userssample.json"), body, 0644)
	if inputErr != nil {
		return nil, inputErr
	}

	result, pwsherr := execution.ExecutePowerShell("john", "*", "nexi-meeting", "30-analyse", "10-parse-users.ps1", "")
	if pwsherr != nil {
		return nil, pwsherr
	}
	utils.PrintSkip2FirstAnd2LastLines(string(result))
	return nil, nil

}
